interface VersionInfo {
  name: string
  version: string
  buildTime: string
  gitTag: string
}

declare global {
  const VERSION_INFO: VersionInfo
  const __VERSION_INFO__: VersionInfo
}

interface Window {
  VERSION_INFO?: VersionInfo
}
