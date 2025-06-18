import { execSync } from 'child_process'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import type { Plugin } from 'vite'

export interface VersionInfo {
  name: string
  version: string
  buildTime: string
  gitTag: string
}

export interface VersionPluginOptions {
  /** 是否在控制台打印版本信息 */
  console?: boolean
  /** 是否生成版本信息JSON文件 */
  generateFile?: boolean
  /** 生成的JSON文件名 */
  fileName?: string
}

function getGitTag(): string {
  try {
    return execSync('git describe --tags --abbrev=0', { encoding: 'utf8' }).trim()
  } catch {
    try {
      // 如果没有tag，尝试获取最新的commit hash
      return execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim()
    } catch {
      return 'unknown'
    }
  }
}

function getPackageInfo(root: string): { name: string; version: string } {
  try {
    const packageJsonPath = resolve(root, 'package.json')
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))
    return {
      name: packageJson.name || 'unknown',
      version: packageJson.version || 'unknown',
    }
  } catch {
    return {
      name: 'unknown',
      version: 'unknown',
    }
  }
}

function generateVersionInfo(root: string): VersionInfo {
  const { name, version } = getPackageInfo(root)
  const buildTime = new Date().toISOString()
  const gitTag = getGitTag()

  return {
    name,
    version,
    buildTime,
    gitTag,
  }
}

function createConsoleScript(versionInfo: VersionInfo): string {
  return `
// 将版本信息挂载到window对象
window.VERSION_INFO = ${JSON.stringify(versionInfo)};

console.group('%c📦 Version Info', 'color: #409eff; font-weight: bold; font-size: 14px;');
console.log('%c项目名称:', 'color: #67c23a; font-weight: bold;', '${versionInfo.name}');
console.log('%c版本号:', 'color: #67c23a; font-weight: bold;', '${versionInfo.version}');
console.log('%c构建时间:', 'color: #67c23a; font-weight: bold;', '${versionInfo.buildTime}');
console.log('%cGit Tag:', 'color: #67c23a; font-weight: bold;', '${versionInfo.gitTag}');
console.groupEnd();
`
}

export default function versionPlugin(options: VersionPluginOptions = {}): Plugin {
  const { console: enableConsole = true, generateFile = true, fileName = 'version.json' } = options

  let versionInfo: VersionInfo
  let isDev = false

  return {
    name: 'vite-plugin-version',
    configResolved(config) {
      isDev = config.command === 'serve'
      versionInfo = generateVersionInfo(config.root)
    },
    config(config, { command }) {
      // 在这里先初始化versionInfo，因为config钩子在configResolved之前执行
      const tempVersionInfo = generateVersionInfo(config.root || process.cwd())

      // 注入全局变量
      if (!config.define) {
        config.define = {}
      }
      config.define.__VERSION_INFO__ = JSON.stringify(tempVersionInfo)
      config.define.VERSION_INFO = JSON.stringify(tempVersionInfo)
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        if (!enableConsole) return html

        const consoleScript = createConsoleScript(versionInfo)
        const scriptTag = `<script>${consoleScript}</script>`

        // 在head标签结束前插入脚本
        return html.replace('</head>', `${scriptTag}\n</head>`)
      },
    },
    generateBundle(options, bundle) {
      if (!generateFile || isDev) return

      // 生成版本信息JSON文件
      this.emitFile({
        type: 'asset',
        fileName,
        source: JSON.stringify(versionInfo, null, 2),
      })
    },
    configureServer(server) {
      // 开发模式下也注入全局变量
      server.middlewares.use((req, res, next) => {
        if (req.url === '/') {
          // 确保开发模式下也能访问到版本信息
          res.setHeader('X-Version-Info', JSON.stringify(versionInfo))
        }
        next()
      })
    },
  }
}

// 类型已在上面导出，无需重复导出
