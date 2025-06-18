interface VersionInfo {
  name: string
  version: string
  buildTime: string
  gitTag: string
}

// 只在浏览器端通过window对象提供版本信息

interface Window {
  VERSION_INFO?: VersionInfo
}
