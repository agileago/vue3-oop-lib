# vite版本信息插件

## 痛点

想要看看当前运行是什么版本，什么时间构建的，git最后一次提交hash，以及构建模式等信息

## 特点

- 在 console 注入构建信息
- 注入全局变量，可获取版本信息
- 生成json文件用于提示新版本,刷新页面
- 自动检测构建模式（development/production）
- 支持用户自定义额外信息

## 如何使用

```shell
pnpm add @vue3-oop/vite-plugin-version -D
```

```ts
import versionInfo from '@vue3-oop/vite-plugin-version'

export default defineConfig({
  plugins: [versionInfo()],
})
```

类型声明加到全局的类型文件中

添加全局变量

```ts
/// <reference types="@vue3-oop/vite-plugin-version/client" />
```

在业务代码中使用：

```ts
// 只能在浏览器端通过window对象访问版本信息
console.log(window.VERSION_INFO.name)      // 项目名称
console.log(window.VERSION_INFO.version)   // 版本号
console.log(window.VERSION_INFO.buildTime) // 构建时间
console.log(window.VERSION_INFO.gitTag)    // Git提交hash
console.log(window.VERSION_INFO.mode)      // 构建模式 (development/production)
console.log(window.VERSION_INFO.extraInfo) // 额外信息（如果有）

// 或者先检查是否存在
if (window.VERSION_INFO) {
  console.log('当前版本:', window.VERSION_INFO.version)
  console.log('构建模式:', window.VERSION_INFO.mode)
}
```

## 配置项

```ts
export interface VersionPluginOptions {
  /** 是否在控制台打印版本信息，默认: true */
  console?: boolean
  /** 是否生成版本信息JSON文件，默认: true */
  generateFile?: boolean
  /** 生成的JSON文件名，默认: 'version.json' */
  fileName?: string
  /** 额外信息，用户可以传入自定义信息 */
  extraInfo?: Record<string, any>
}
```

### 基础用法

```ts
// 使用默认配置
export default defineConfig({
  plugins: [versionInfo()],
})
```

### 自定义配置

```ts
// 自定义配置
export default defineConfig({
  plugins: [
    versionInfo({
      console: true,           // 在控制台打印版本信息
      generateFile: true,      // 生成版本信息JSON文件
      fileName: 'app-version.json', // 自定义文件名
      extraInfo: {             // 额外信息
        author: 'Your Name',
        buildEnv: process.env.NODE_ENV,
        customField: 'custom value'
      }
    })
  ],
})
```

### 版本信息结构

```ts
interface VersionInfo {
  name: string              // 项目名称（来自package.json）
  version: string           // 版本号（来自package.json）
  buildTime: string         // 构建时间
  gitTag: string           // Git提交hash（短格式）
  mode: string             // 构建模式（development/production）
  extraInfo?: Record<string, any> // 用户自定义的额外信息
}
```

## 输出示例

### 控制台输出

```
📦 Version Info:
   Name: my-awesome-app
   Version: 1.0.0
   Build Time: 2024-01-15 10:30:45
   Git Tag: a1b2c3d
   Mode: production
   Extra Info: {"author":"Your Name","buildEnv":"production"}
```

### JSON文件内容

```json
{
  "name": "my-awesome-app",
  "version": "1.0.0",
  "buildTime": "2024-01-15 10:30:45",
  "gitTag": "a1b2c3d",
  "mode": "production",
  "extraInfo": {
    "author": "Your Name",
    "buildEnv": "production",
    "customField": "custom value"
  }
}
```

## 注意事项

- Git提交hash需要在Git仓库中才能获取，否则显示为 'unknown'
- 构建模式会自动从Vite配置中检测
- extraInfo支持任意JSON可序列化的数据
- 生成的JSON文件位于构建输出目录中

