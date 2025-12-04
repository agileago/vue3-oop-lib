import { createApp, defineComponent, h, nextTick } from 'vue'
import { describe, expect, it } from 'vitest'
import { injectService, provideService } from '../src/service'

describe('service', () => {
  it('should provide and inject class service', async () => {
    class MyService {
      value = 'test'
    }

    let injected: MyService | undefined

    const Child = defineComponent({
      setup() {
        injected = injectService(MyService)
        return () => h('div')
      },
    })

    const Parent = defineComponent({
      setup() {
        provideService(new MyService())
        return () => h(Child)
      },
    })

    const app = createApp(Parent)
    const root = document.createElement('div')
    app.mount(root)

    await nextTick()
    expect(injected).toBeInstanceOf(MyService)
    expect(injected?.value).toBe('test')
  })

  it('should provide and inject function service', async () => {
    function useMyService() {
      return { value: 'test-fn' }
    }

    let injected: ReturnType<typeof useMyService> | undefined

    const Child = defineComponent({
      setup() {
        injected = injectService(useMyService)
        return () => h('div')
      },
    })

    const Parent = defineComponent({
      setup() {
        provideService(useMyService(), useMyService)
        return () => h(Child)
      },
    })

    const app = createApp(Parent)
    const root = document.createElement('div')
    app.mount(root)

    await nextTick()
    expect(injected).toEqual({ value: 'test-fn' })
  })

  it('should inject with default value', async () => {
    class MyService {
      value = 'original'
    }
    const defaultService = new MyService()
    defaultService.value = 'default'

    let injected: MyService | undefined

    const Component = defineComponent({
      setup() {
        injected = injectService(MyService, defaultService)
        return () => h('div')
      },
    })

    const app = createApp(Component)
    const root = document.createElement('div')
    app.mount(root)

    await nextTick()
    expect(injected).toBe(defaultService)
    expect(injected?.value).toBe('default')
  })

  it('should inject with factory default value', async () => {
    class MyService {
      value = 'original'
    }

    let injected: MyService | undefined

    const Component = defineComponent({
      setup() {
        injected = injectService(
          MyService,
          () => {
            const s = new MyService()
            s.value = 'factory'
            return s
          },
          true,
        )
        return () => h('div')
      },
    })

    const app = createApp(Component)
    const root = document.createElement('div')
    app.mount(root)

    await nextTick()
    expect(injected).toBeInstanceOf(MyService)
    expect(injected?.value).toBe('factory')
  })

  it('should treat default value as value when treatDefaultAsFactory is false', async () => {
    function useService() {
      return () => 'fn'
    }

    const defaultFn = () => 'default'
    let injected: any

    const Component = defineComponent({
      setup() {
        // 这里我们故意传入一个函数作为默认值，并期望它被当作值本身，而不是工厂函数
        injected = injectService(useService, defaultFn, false)
        return () => h('div')
      },
    })

    const app = createApp(Component)
    const root = document.createElement('div')
    app.mount(root)

    await nextTick()
    expect(injected).toBe(defaultFn)
    expect(injected()).toBe('default')
  })
})
