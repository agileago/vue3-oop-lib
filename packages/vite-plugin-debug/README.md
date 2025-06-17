# 移动端调试vite插件

## 痛点

开发移动端项目时经常会使用到`vconsole`或者`eruda`工具去调试查看webview中页面，但在项目集成的过程中会发现
每次都要重复处理一些工作，我们想要把这部分工作直接交由vite编译工具去集中处理掉，所有有了此插件

## 特点

- 使用 [eruda](https://github.com/liriliri/eruda) 调试工具
- 默认除 `prod` 环境，自动加载debug插件
- 默认配置只有在`icome`环境中加载
- 支持`url`参数 `isDebug=1` 直接展示
- 支持在生产环境通过事件异步触发插件加载
- 添加钉钉实用功能按钮

## 如何使用

```shell
pnpm add @vue3-oop/vite-plugin-debug -D
```

```ts
import webviewDebug from '@vue3-oop/vite-plugin-debug'

export default defineConfig({
  plugins: [webviewDebug()],
})
```
类型声明加到全局的类型文件中

```ts
/// <reference types="@enn/vite-plugin-debug/client" />
```

生产环境异步加载使用

```ts
window.$dispatchErudaLoad()
```

## 配置项

默认配置项

```ts
const config = {
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
```
