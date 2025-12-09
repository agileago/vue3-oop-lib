import { camelize, getCurrentInstance, useAttrs, useSlots } from 'vue'
import type { ClassAndStyleProps } from './types'
import { getEmitsFromProps } from './util'

export function camelizePropKey(p: string | symbol): string | symbol {
  if (typeof p === 'string') {
    if (p.startsWith('data-') || p.startsWith('aria-')) return p
    return camelize(p)
  }
  return p
}

export function useProps<T>(): T {
  const instance = getCurrentInstance()
  if (!instance) {
    throw new Error('useProps must be called inside setup()')
  }
  // 组件定义
  let vnodeProps: any = null
  let propsObj: any = null

  function addEmitsForComp() {
    if (vnodeProps === instance!.vnode.props) return
    getProps()
    getEmitsFromProps(Object.keys(propsObj), instance!.type.emits)
    for (const item of instance!.type.emits) {
      // @ts-ignore
      if (!(item in instance!.emitsOptions)) instance!.emitsOptions[item] = null
    }
  }

  const slots = useSlots()
  const getProps = () => {
    if (vnodeProps === instance.vnode.props) return propsObj
    vnodeProps = instance.vnode.props
    propsObj = Object.fromEntries(Object.entries(instance.vnode.props || {}).map(([k, v]) => [camelizePropKey(k), v]))
    return propsObj
  }

  addEmitsForComp()

  return new Proxy(
    {},
    {
      get(target, p, receiver) {
        addEmitsForComp()
        const slotName = getSlotName(p)
        if (slotName) {
          const slot = Reflect.get(slots, slotName, receiver)
          if (slot) return slot
        }
        const key = camelizePropKey(p)
        // 处理属性默认值
        if (key in instance.props) {
          // @ts-ignore
          return instance.props[key]
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          instance.proxy?.$attrs

          return Reflect.get(getProps(), key, receiver)
        }
      },
      ownKeys() {
        addEmitsForComp()
        return [
          ...new Set([
            ...Reflect.ownKeys(instance.props),
            ...Reflect.ownKeys(getProps()),
            ...Reflect.ownKeys(slots).map(k => (typeof k === 'string' ? camelize(`render-${k}`) : k)),
          ]),
        ]
      },
      has(target, p) {
        addEmitsForComp()
        const slotName = getSlotName(p)
        if (slotName) {
          return Reflect.has(slots, slotName)
        }
        const key = camelizePropKey(p)
        return Reflect.has(instance.props, key) || Reflect.has(getProps(), key)
      },
      getOwnPropertyDescriptor(target, p) {
        addEmitsForComp()
        const slotName = getSlotName(p)
        if (slotName) {
          const descriptor = Reflect.getOwnPropertyDescriptor(slots, slotName)
          if (descriptor) return descriptor
        }
        const key = camelizePropKey(p)
        if (key in instance.props) {
          return Reflect.getOwnPropertyDescriptor(instance.props, key)
        }
        return Reflect.getOwnPropertyDescriptor(getProps(), key)
      },
    },
  ) as any
}

function getSlotName(p: PropertyKey) {
  if (typeof p === 'string' && p.startsWith('render')) return p.slice(6).replace(/^[A-Z]/, s => s.toLowerCase())
}

export function useClassAndStyle(): ClassAndStyleProps {
  const instance = getCurrentInstance()
  if (!instance) {
    throw new Error('useClassAndStyle must be called inside setup()')
  }

  const attrs = useAttrs()
  const keys = ['class', 'style']

  return new Proxy(attrs, {
    get(target, p, receiver) {
      if (keys.includes(p as string)) {
        return Reflect.get(target, p, receiver)
      }
    },
    ownKeys: () => keys,
    has: (target, p) => keys.includes(p as string),
  })
}
