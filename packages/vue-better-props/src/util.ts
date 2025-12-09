import { getCurrentInstance, isRef, type ComponentPublicInstance, type VNodeRef } from 'vue'

// 处理forwardref
export function useForwardRef() {
  const instance = getCurrentInstance()!
  function forwardRef(ref: any) {
    instance.exposed = ref
    instance.exposeProxy = ref
  }
  return forwardRef
}

// 合并ref
export function mergeRefs(...values: VNodeRef[]) {
  return function (ref: Element | ComponentPublicInstance | null, refs: Record<string, any>) {
    for (const r of values) {
      if (typeof r === 'string') {
        refs[r] = ref
      } else if (typeof r === 'function') {
        r(ref, refs)
      } else if (isRef(r)) {
        r.value = ref
      }
    }
  }
}

export function getEmitsFromProps(defaultProps: Record<string, any> | string[], emits: string[] = []) {
  const keys = Array.isArray(defaultProps) ? defaultProps : Object.keys(defaultProps)

  for (let key of keys) {
    if (!/^on/.test(key)) continue
    key = key.slice(2).replace(/Once$/, '')
    const emit = key[0].toLowerCase() + key.slice(1)
    if (!emits.includes(emit)) emits.push(emit)
  }
  return emits
}
