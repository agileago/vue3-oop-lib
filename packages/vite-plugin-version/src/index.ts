import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import type { Plugin } from 'vite'

export interface VersionInfo {
  name: string
  version: string
  buildTime: string
  gitTag: string
  mode: string
  extraInfo?: Record<string, any>
}

export interface VersionPluginOptions {
  /** 是否在控制台打印版本信息 */
  console?: boolean
  /** 是否生成版本信息JSON文件 */
  generateFile?: boolean
  /** 生成的JSON文件名 */
  fileName?: string
  /** 额外信息，用户可以传入自定义信息 */
  extraInfo?: Record<string, any>
}

function getGitTag(): string {
  try {
    // 直接获取最新的commit hash
    return execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim()
  } catch {
    return 'unknown'
  }
}

function getPackageInfo(root: string): { name: string; version: string } {
  try {
    const packageJsonPath = resolve(root, 'package.json')
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))
    return {
      name: packageJson.description || packageJson.name || 'unknown',
      version: packageJson.version || 'unknown',
    }
  } catch {
    return {
      name: 'unknown',
      version: 'unknown',
    }
  }
}

function generateVersionInfo(root: string, mode: string, extraInfo?: Record<string, any>): VersionInfo {
  const { name, version } = getPackageInfo(root)
  const date = new Date()
  // 使用本地时间格式，避免硬编码时区偏移
  const buildTime = date
    .toLocaleString('zh-CN', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    .replace(/\//g, '-')
  const gitTag = getGitTag()

  return {
    name,
    version,
    buildTime,
    gitTag,
    mode,
    ...extraInfo,
  }
}

function createConsoleScript(versionInfo: VersionInfo, extraInfo?: Record<string, any>): string {
  // 通用高对比度配色方案，适配所有模式
  const colors = {
    primary: '#2563eb',
    secondary: '#6b7280',
    success: '#16a34a',
    warning: '#ea580c',
    background: '#f8fafc',
    border: '#94a3b8',
    text: '#1e293b',
  }

  // 生成额外信息日志
  let extraInfoLogs = ''
  if (extraInfo) {
    for (const [key, value] of Object.entries(extraInfo)) {
      const displayValue = typeof value === 'string' ? value : JSON.stringify(value)
      extraInfoLogs += `console.log('%c📋 ${key}: %c${displayValue}', createLabelStyle(), createValueStyle());\n`
    }
  }

  return `
window.VERSION_INFO = ${JSON.stringify(versionInfo, undefined, 2)};

// 通用高对比度配色方案，适配所有模式
const colors = {
  primary: '${colors.primary}',
  secondary: '${colors.secondary}',
  success: '${colors.success}',
  warning: '${colors.warning}',
  background: '${colors.background}',
  border: '${colors.border}',
  text: '${colors.text}'
};

// 统一的样式生成函数
const createLabelStyle = () => \`color: \${colors.secondary}; background: \${colors.background}; padding: 4px 8px; border-radius: 4px; font-weight: normal;\`;
const createValueStyle = (color = colors.text, bold = false) => \`color: \${color}; background: \${colors.background}; padding: 4px 8px; border-radius: 4px; font-weight: \${bold ? 'bold' : 'normal'};\`;
const createHeaderStyle = () => \`background: \${colors.background}; color: \${colors.text}; padding: 8px 12px; border-radius: 6px; border: 1px solid \${colors.border}; font-weight: bold; font-size: 14px;\`;

// 简洁的项目信息展示
console.group('%c📦 ${versionInfo.name}', createHeaderStyle());
console.log('%c🏷️ 版本: %c${versionInfo.version}', createLabelStyle(), createValueStyle(colors.primary, true));
console.log('%c🔨 构建: %c${versionInfo.buildTime}', createLabelStyle(), createValueStyle());
console.log('%c📝 提交: %c${versionInfo.gitTag}', createLabelStyle(), createValueStyle());
console.log('%c⚙️ 模式: %c${versionInfo.mode}', createLabelStyle(), createValueStyle(colors.success, true));
${extraInfoLogs}console.groupEnd();
`
}

export default function versionPlugin(options: VersionPluginOptions = {}): Plugin {
  const { console: enableConsole = true, generateFile = true, fileName = 'version.json', extraInfo } = options

  let versionInfo: VersionInfo
  let isDev = false

  return {
    name: 'vite-plugin-version',
    configResolved(config) {
      isDev = config.command === 'serve'
      const mode = config.mode || (isDev ? 'development' : 'production')
      versionInfo = generateVersionInfo(config.root, mode, extraInfo)
    },
    // 移除config钩子，不在构建时注入全局变量，只在浏览器端注入
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        if (!enableConsole) return html

        const consoleScript = createConsoleScript(versionInfo, extraInfo)
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
