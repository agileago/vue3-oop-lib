# vite版本信息插件

## 痛点

想要看看当前运行是什么版本，什么时间构建的，git最后一次构建tag

## 特点

- 在 console 注入构建信息
- 注入全局变量，可获取版本信息
- 生成json文件用于提示新版本,刷新页面

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
// 通过全局变量访问版本信息
console.log(VERSION_INFO.name)     // 项目名称
console.log(VERSION_INFO.version)  // 版本号
console.log(VERSION_INFO.buildTime) // 构建时间
console.log(VERSION_INFO.gitTag)   // Git标签

// 或者通过window对象访问
console.log(window.VERSION_INFO)
```

## 配置项

