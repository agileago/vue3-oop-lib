import { inject, provide, type InjectionKey } from 'vue'

export const FnInjectKey = Symbol('vue-better-props-function-inject-key')

export function getClassInjectKey<T extends new (...args: any) => any>(Construct: T) {
  // @ts-ignore
  if (!Construct[FnInjectKey]) {
    Object.defineProperty(Construct, FnInjectKey, {
      enumerable: false,
      configurable: true,
      writable: false,
      value: Symbol(Construct.name),
    })
  }
  // @ts-ignore
  return Construct[FnInjectKey] as InjectionKey<InstanceType<T>>
}

export function provideService<T extends new (...args: any) => any>(service: InstanceType<T>) {
  const Construct = service.constructor
  if (!Construct) throw new Error('only use class instance')
  const injectKey = getClassInjectKey(Construct)
  provide<InstanceType<T>>(injectKey, service)
}

export function injectService<T extends new (...args: any) => any>(classService: T) {
  // @ts-ignore
  return inject<InstanceType<T>>(classService[FnInjectKey])!
}
