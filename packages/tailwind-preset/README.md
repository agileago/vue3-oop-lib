# vue3-oop tailwind预设插件

本插件提供以下能力

- 统一设计token颜色变量
- 提供数字字体 font-d-din-pro
- 预设 rem2px、safe-area 插件
- 提供svg图标tailwind使用

## 如何使用

### 安装

```shell
pnpm add -D @vue3-oop/tailwind-preset
```

### 项目中配置

在项目的 `tailwind.config.js` 中引入并使用

```javascript

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@@vue3-oop/tailwind-preset').preset()
  ],
}

```

项目的入口 `main.css` 中写入

```css
@import "@vue3-oop/tailwind-preset/preflight.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 使用统一配色

在配置中配置团队整体配色

```js
module.exports = {
  presets: [
    require('@vue3-oop/tailwind-preset').preset({
      colors: {
        primary: '#1c6add'
      }
    })
  ],
}
```

然后项目代码就可有tailwind智能提示

```html
<div class="text-primary">primary color</div>
```

#### 使用数字字体

```html
<div class="font-d-din-pro">1111</div>
```

#### 使用 svg 图标

在项目目录下 `src/icons` 放置svg图标，然后在代码中就可以有智能提示

```html
<i class="i-arrow-top"></i>
```

