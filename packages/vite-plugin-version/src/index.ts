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
    // 移除config钩子，不在构建时注入全局变量，只在浏览器端注入
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
  }
}

// 类型已在上面导出，无需重复导出
