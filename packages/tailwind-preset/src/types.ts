export interface WebFontProps {
  path: string
  weight?: number
  style?: string
}

export interface JuanOptions {
  /* token前缀 默认 空 */
  cssVarPrefix?: string
  colors?: Record<string, any>
  /**
   * 是否使用数字字体 font-d-din-pro
   * @default false
   */
  useNumberFont?: boolean
  /*
   * 自定义的web字体
   * */
  webFonts?: Record<string, WebFontProps[]>

  /**
   * 是否使用svg icon 默认true
   */
  useSvgIcon?: boolean
  /**
   * svg icon目录
   * @default src/icons
   */
  iconPath?: string
  /**
   * 图标前缀
   * @default icon
   */
  iconClassPrefix?: string
  /**
   * 图标额外的属性
   */
  extraIconProps?: Record<string, string>
}
