// @ts-check
const babel = require('@babel/core')
const jsx = require('@vue/babel-plugin-jsx')
const importMeta = require('@babel/plugin-syntax-import-meta')
const { createFilter, normalizePath } = require('@rollup/pluginutils')
const hash = require('hash-sum')
const path = require('path')

const ssrRegisterHelperId = '/__vue-jsx-ssr-register-helper'
const ssrRegisterHelperCode = `import { useSSRContext } from "vue"\n` + `export ${ssrRegisterHelper.toString()}`

/**
 * This function is serialized with toString() and evaluated as a virtual
 * module during SSR
 * @param {import('vue').ComponentOptions} comp
 * @param {string} filename
 */
function ssrRegisterHelper(comp, filename) {
  const setup = comp.setup
  comp.setup = (props, ctx) => {
    // eslint-disable-next-line no-undef
    const ssrContext = useSSRContext()
    ;(ssrContext.modules || (ssrContext.modules = new Set())).add(filename)
    if (setup) {
      return setup(props, ctx)
    }
  }
}

/**
 * @typedef { import('@rollup/pluginutils').FilterPattern} FilterPattern
 * @typedef { { include?: FilterPattern, exclude?: FilterPattern, babelPlugins?: any[] } } CommonOptions
 */

/**
 *
 * @param {import('@vue/babel-plugin-jsx').VueJSXPluginOptions & CommonOptions} options
 * @returns {import('vite').Plugin}
 */
function vueJsxPlugin(options = {}) {
  let root = ''
  let needHmr = false
  let needSourceMap = true
  let isProd = false
  let tsconfig

  return {
    name: 'vue3-oop:vue-jsx',

    config(config) {
      const optionsApi = config.define ? config.define.__VUE_OPTIONS_API__ : undefined
      const devTools = config.define ? config.define.__VUE_PROD_DEVTOOLS__ : undefined
      return {
        // support ts decorators to use tsc compile
        esbuild: {
          include: /\.esbuild\./,
        },
        define: {
          __VUE_OPTIONS_API__: optionsApi != null ? optionsApi : true,
          __VUE_PROD_DEVTOOLS__: devTools != null ? devTools : false,
        },
      }
    },

    configResolved(config) {
      needHmr = config.command === 'serve' && !config.isProduction
      needSourceMap = config.command === 'serve' || !!config.build.sourcemap
      root = config.root
      isProd = config.isProduction
    },

    resolveId(id) {
      if (id === ssrRegisterHelperId) {
        return id
      }
    },

    load(id) {
      if (id === ssrRegisterHelperId) {
        return ssrRegisterHelperCode
      }
    },

    transform(code, id, opt) {
      const ssr = typeof opt === 'boolean' ? opt : (opt && opt.ssr) === true
      const { include = /\.(jsx|tsx?)/, exclude = /\.esbuild\./, babelPlugins = [], ...babelPluginOptions } = options

      const filter = createFilter(include, exclude)

      if (filter(id)) {
        if (/\.tsx?/.test(id)) {
          const ts = require('typescript')
          if (!tsconfig) {
            const configPath = ts.findConfigFile('./', ts.sys.fileExists, 'tsconfig.json')
            if (!configPath) {
              throw new Error('Could not find a valid "tsconfig.json".')
            }
            tsconfig = ts.parseJsonConfigFileContent(
              { extends: './tsconfig.json' },
              ts.sys,
              path.dirname(path.resolve(configPath)),
            )
            if (!tsconfig.options) {
              tsconfig.options = {}
            }
            Object.assign(tsconfig.options, {
              sourceMap: isProd && needSourceMap,
              inlineSourceMap: !isProd && needSourceMap,
              inlineSources: !isProd && needSourceMap,
            })
          }
          const { outputText, diagnostics, sourceMapText } = ts.transpileModule(code, {
            compilerOptions: tsconfig.options,
            fileName: id,
            reportDiagnostics: true,
          })
          if (diagnostics?.[0]) {
            throw new Error(diagnostics[0].messageText)
          }
          code = outputText
          if (!id.endsWith('x')) {
            return {
              code: code,
              map: isProd && needSourceMap ? sourceMapText : undefined,
            }
          }
        }

        /** @type {any[]} */
        const plugins = [importMeta, ...babelPlugins, [jsx, babelPluginOptions]]

        const result = babel.transformSync(code, {
          babelrc: false,
          ast: true,
          plugins,
          sourceMaps: needSourceMap,
          sourceFileName: id,
          configFile: false,
        })

        if (!ssr && !needHmr) {
          return {
            code: result.code,
            map: result.map,
          }
        }

        // check for hmr injection
        /**
         * @type {{ name: string }[]}
         */
        const declaredComponents = []
        /**
         * @type {{
         *  local: string,
         *  exported: string,
         *  id: string,
         * }[]}
         */
        const hotComponents = []
        let hasDefault = false

        for (const node of result.ast.program.body) {
          if (node.type === 'VariableDeclaration') {
            const names = parseComponentDecls(node, code)
            if (names.length) {
              declaredComponents.push(...names)
            }
            continue
          }

          if (node.type === 'ClassDeclaration' && isExtendClassComponet(node)) {
            declaredComponents.push({ name: node.id.name })
            continue
          }

          if (node.type === 'ExportNamedDeclaration') {
            const { declaration, specifiers } = node
            if (declaration && declaration.type === 'VariableDeclaration') {
              hotComponents.push(
                ...parseComponentDecls(declaration, code).map(({ name }) => ({
                  local: name,
                  exported: name,
                  id: hash(id + name),
                })),
              )
            } else if (declaration && declaration.type === 'ClassDeclaration' && isExtendClassComponet(declaration)) {
              const name = node.declaration.id.name
              hotComponents.push({
                local: name,
                exported: name,
                id: hash(id + name),
              })
            } else if (specifiers.length) {
              for (const spec of specifiers) {
                if (spec.type === 'ExportSpecifier' && spec.exported.type === 'Identifier') {
                  const matched = declaredComponents.find(({ name }) => name === spec.local.name)
                  if (matched) {
                    hotComponents.push({
                      local: spec.local.name,
                      exported: spec.exported.name,
                      id: hash(id + spec.exported.name),
                    })
                  }
                }
              }
            }
          }

          if (node.type === 'ExportDefaultDeclaration') {
            if (node.declaration.type === 'Identifier') {
              const _name = node.declaration.name
              const matched = declaredComponents.find(({ name }) => name === _name)
              if (matched) {
                hotComponents.push({
                  local: node.declaration.name,
                  exported: 'default',
                  id: hash(id + 'default'),
                })
              }
            } else if (isDefineComponentCall(node.declaration)) {
              hasDefault = true
              hotComponents.push({
                local: '__default__',
                exported: 'default',
                id: hash(id + 'default'),
              })
            } else if (
              node.declaration &&
              node.declaration.type === 'ClassDeclaration' &&
              isExtendClassComponet(node.declaration)
            ) {
              const name = node.declaration.id.name
              hotComponents.push({
                local: name,
                exported: 'default',
                id: hash(id + name),
              })
            }
          }
        }

        if (hotComponents.length) {
          if (hasDefault && (needHmr || ssr)) {
            result.code =
              result.code.replace(/export default defineComponent/g, `const __default__ = defineComponent`) +
              `\nexport default __default__`
          }

          if (needHmr && !ssr && !/\?vue&type=script/.test(id)) {
            let code = result.code
            let callbackCode = ``
            for (const { local, exported, id } of hotComponents) {
              code += `\n${local}.__hmrId = "${id}"` + `\n__VUE_HMR_RUNTIME__.createRecord("${id}", ${local})`
              callbackCode += `\n__VUE_HMR_RUNTIME__.reload("${id}", __${exported})`
            }

            code += `\nimport.meta.hot.accept(({${hotComponents
              .map(c => `${c.exported}: __${c.exported}`)
              .join(',')}}) => {${callbackCode}\n})`

            result.code = code
          }

          if (ssr) {
            const normalizedId = normalizePath(path.relative(root, id))
            let ssrInjectCode =
              `\nimport { ssrRegisterHelper } from "${ssrRegisterHelperId}"` +
              `\nconst __moduleId = ${JSON.stringify(normalizedId)}`
            for (const { local } of hotComponents) {
              ssrInjectCode += `\nssrRegisterHelper(${local}, __moduleId)`
            }
            result.code += ssrInjectCode
          }
        }

        return {
          code: result.code,
          map: result.map,
        }
      }
    },
  }
}

/**
 * @param {import('@babel/core').types.VariableDeclaration} node
 * @param {string} source
 */
function parseComponentDecls(node, source) {
  const names = []
  for (const decl of node.declarations) {
    if (decl.id.type !== 'Identifier') {
      continue
    }
    if (isDefineComponentCall(decl.init) || isClassComponentDefine(decl.init)) {
      names.push({ name: decl.id.name })
    }
  }
  return names
}

/**
 * @param {import('@babel/core').types.Node} node
 */
function isDefineComponentCall(node) {
  return (
    node &&
    node.type === 'CallExpression' &&
    node.callee.type === 'Identifier' &&
    node.callee.name === 'defineComponent'
  )
}

/**
 * @param {import('@babel/core').types.Node} node
 */
function isClassComponentDefine(node) {
  return node && node.type === 'ClassExpression' && isExtendClassComponet(node)
}
/**
 * @param {import('@babel/core').types.Node} node
 */
function isExtendClassComponet(node) {
  return node && node.superClass && node.superClass.name === 'VueComponent'
}

module.exports = vueJsxPlugin
vueJsxPlugin.default = vueJsxPlugin
