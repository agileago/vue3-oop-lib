import { merge } from 'ts-deepmerge'
import type { Plugin } from 'vite'

type BuildEnv = 'dev' | 'development' | 'fat' | 'uat' | 'prod' | string
type BuildEnvMap = {
  [K in BuildEnv]?: EnvSetValue
}
type EnvSetValue = boolean | 'event'

export interface IDebugConfig {
  /* 是否开启url参数debug, 默认开启 isDebug=1 */
  urlParam?: {
    /* 默认 true */
    enable?: boolean
    /* isDebug */
    key?: string
    /* 1 */
    value?: string
  }
  envDebugSet?: BuildEnvMap
  /**
   * eruda地址 https://s.ennew.com/npm/eruda@3.2.0/eruda.js
   */
  erudaSrc?: string
  /*额外的初始化代码*/
  initCode?: boolean
  /**
   * 是否添加icome账号退出代码
   */
  icomeAuthCode?: string
  /**
   * 是否展示 debug 插件过滤条件，一般用于判断ua
   * 默认 在钉钉和微信浏览器打开
   * @default ['dingtalk', 'micromessenger']
   */
  uaFilter?: string[]
}

const erudaSrcDefault = 'https://s.ennew.com/npm/eruda@3.2.0/eruda.js'

const initErudaCodeFn = () => {
  // @ts-expect-error todo
  eruda.init({
    tool: ['snippets', 'console', 'elements', 'network', 'resources', 'info', 'sources'],
  })
  // @ts-expect-error todo
  const snippets = eruda.get('snippets')
  const refresh = snippets._snippets[1]
  snippets.clear()
  snippets.add('刷新页面', refresh.fn, '带时间戳刷新页面')
  snippets.add(
    '清除缓存并刷新页面',
    () => {
      window.localStorage.clear()
      window.sessionStorage.clear()
      window.location.reload()
    },
    '清除缓存并刷新页面',
  )
}
const getInnerCode = (func: () => void) => {
  const code = func.toString()
  // 去除箭头函数的定义外壳
  return code.replace(/^[^{]*{/, '').replace(/}$/, '')
}
const icomeAuthCode = `;snippets.add('切换icome账号',
    () => {
      window.$authSdk.logout()
    },
    '切换icome账号,请先加载auth sdk',
  );`

export default function webviewDebug(config?: IDebugConfig): Plugin {
  const defaultConfig: IDebugConfig = {
    urlParam: {
      enable: true,
      key: 'isDebug',
      value: '1',
    },
    envDebugSet: {
      development: false,
      dev: true,
      fat: true,
      uat: 'event',
      prod: 'event',
    },
    uaFilter: ['dingtalk', 'micromessenger'],
  }
  const finalConfig = merge.withOptions({ mergeArrays: false }, {}, defaultConfig, config! || {})
  const erudaSrc = finalConfig.erudaSrc || erudaSrcDefault

  const initErudaCode = `${getInnerCode(initErudaCodeFn)};${finalConfig.icomeAuthCode && icomeAuthCode};${finalConfig.initCode || ''}`

  let mode: string
  return {
    name: '@vue3-oop/vite-plugin-debug',
    config(config, env) {
      mode = env.mode
      return config
    },
    transformIndexHtml(html) {
      const res = finalConfig.envDebugSet?.[mode]
      if (res !== true && res !== 'event') return html
      const isEvent = res === 'event'
      const urlEnabled = finalConfig.urlParam?.enable
      const uaEnabled = !!finalConfig.uaFilter?.length
      const code = [`window.$initErdudaFn = () => {${initErudaCode}}`]
      const urlCode = `const urlDebug = () => {
        const match = '${finalConfig.urlParam?.key}=${finalConfig.urlParam?.value}';
        return location.href.includes(match);
      }`

      const uaFilterCode = `const uaFilter = () => { 
      const ua = navigator.userAgent.toLowerCase(); 
      const filters = ${JSON.stringify(finalConfig.uaFilter || [])};
      return filters.some(k => ua.includes(k))
      }`

      urlEnabled && code.push(urlCode)
      uaEnabled && code.push(uaFilterCode)

      if (isEvent) {
        code.push(`window.$dispatchErudaLoad = () => {};`)
        const initJudgeCode = uaEnabled ? 'uaFilter() && $initErdudaFn();' : '$initErdudaFn();'
        const dispatchCode = `window.$dispatchErudaLoad = function () {
function loadAssets(url) {
  return new Promise(function (resolve, reject) {
    const script = document.createElement('script')
    script.crossOrigin = 'anonymous'
    script.src = url
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script);
  })
};
loadAssets('${erudaSrc}').then(function () {${initJudgeCode}});
}`

        if (urlEnabled) {
          code.push(`
          if (urlDebug()) {
            document.writeln('<script src="${erudaSrc}"><\\/script>')
            document.writeln(\`<script>$initErdudaFn();<\\/script>\`)
          } else {
            ${dispatchCode}
          }
`)
        } else {
          code.push(dispatchCode)
        }
        return [
          {
            tag: 'script',
            children: 'if(true){' + code.join(';') + '}',
            injectTo: 'head-prepend',
          },
        ]
      }

      if (urlEnabled && uaEnabled) {
        code.push(`if(urlDebug() || uaFilter()) {$initErdudaFn()}`)
      } else if (uaEnabled) {
        code.push(`if(uaFilter()) {$initErdudaFn()}`)
      } else {
        code.push(`$initErdudaFn()`)
      }

      return [
        {
          tag: 'script',
          attrs: {
            src: erudaSrc,
            crossorigin: 'anonymous',
          },
          injectTo: 'head-prepend',
        },
        {
          tag: 'script',
          children: 'if(true){' + code.join(';') + '}',
          injectTo: 'head-prepend',
        },
      ]
    },
  }
}
