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

export function getFnInjectKey<T extends (...args: any) => any>(Construct: T) {
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
  return Construct[FnInjectKey] as InjectionKey<ReturnType<T>>
}

export function provideService<T extends new (...args: any) => any>(service: InstanceType<T>): void
export function provideService<T extends (...args: any) => any>(service: ReturnType<T>, fn: T): void
export function provideService(service: any, fn?: any) {
  if (!fn) {
    const Construct = service.constructor
    if (!Construct) throw new Error('only use class instance')
    const injectKey = getClassInjectKey(Construct)
    provide(injectKey, service)
  } else {
    provide(getFnInjectKey(fn), service)
  }
}

export function injectService<T extends new (...args: any) => any>(
  service: T,
  defaultValue?: InstanceType<T>,
  treatDefaultAsFactory?: false,
): InstanceType<T>
export function injectService<T extends new (...args: any) => any>(
  service: T,
  defaultValue: InstanceType<T> | (() => InstanceType<T>),
  treatDefaultAsFactory: true,
): InstanceType<T>
export function injectService<T extends (...args: any) => any>(
  service: T,
  defaultValue?: ReturnType<T>,
  treatDefaultAsFactory?: false,
): ReturnType<T>
export function injectService<T extends (...args: any) => any>(
  service: T,
  defaultValue: ReturnType<T> | (() => ReturnType<T>),
  treatDefaultAsFactory: true,
): ReturnType<T>
export function injectService(service: any, defaultValue?: any, treatDefaultAsFactory = false) {
  const injectKey = getClassInjectKey(service)
  return inject(injectKey, defaultValue, treatDefaultAsFactory as any)
}
