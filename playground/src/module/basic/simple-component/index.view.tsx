import { ref } from 'vue'
import { getCurrentInstance } from '@vue/runtime-dom'
import {
  defineComponent,
  injectService,
  provideService,
  useClassAndStyle,
  type ClassAndStyleProps,
} from 'vue-better-props'

// region 函数组件
export interface SimpleFuncComponentProps extends ClassAndStyleProps {
  count?: number
}
export function SimpleFuncComponent(props: SimpleFuncComponentProps) {
  return <div>函数组件：{props.count}</div>
}
// endregion

// region 服务
class CountService {
  count = ref(0)
}

// region 状态带属性组件
export interface SimpleStateComponentProps {
  initialValue?: number
}

export const SimpleStateComponent = defineComponent(function SimpleStateComponent(props: SimpleStateComponentProps) {
  const classAndStyle = useClassAndStyle()
  const count = ref(props.initialValue || 0)
  const cs = injectService(CountService)
  return () => (
    <div {...classAndStyle}>
      <span onClick={() => cs.count.value++}>{cs.count.value}</span>
      <input type={'number'} v-model={count.value} />
    </div>
  )
})

export const Abc = defineComponent(
  (props: { onClick?: () => void }) => {
    let count = 0
    return () => {
      console.log('refresh:', count++)
      return <div>{count}</div>
    }
  },
  {
    name: 'Abc',
  },
)

export const SimpleStateWithDefaultValueComponent = defineComponent(
  function SimpleStateWithDefaultValueComponent(props: SimpleStateComponentProps, { attrs }) {
    const classAndStyle = useClassAndStyle()
    const count = ref(props.initialValue || 0)
    return () => {
      console.log(2222, props.initialValue, attrs)
      console.log(3333, { ...props })
      return (
        <div {...classAndStyle} {...props}>
          <h3>带默认属性参数的组件</h3>
          <input type={'number'} v-model={count.value} />
          <Abc onClick={() => console.log('nothing')}></Abc>
        </div>
      )
    }
  },
  {
    props: {
      initialValue: {
        type: Number,
        default: 20,
      },
    },
  },
)

// endregion

// 简单状态组件定义
const SimpleComponent = defineComponent(() => {
  const init = ref<undefined | number>(10)
  const cs = new CountService()
  provideService(cs)
  console.log(cs)

  return () => (
    <div>
      <h2>简单组件定义</h2>
      <h3>函数组件</h3>
      <div class={'icon-arrow-top text-red-400'}></div>
      <div class={'font-d-din-pro'}>1122</div>
      <div class={'font-puhui'}>任建华</div>
      <SimpleFuncComponent count={20}></SimpleFuncComponent>
      <SimpleStateComponent initialValue={10}></SimpleStateComponent>
      <button onClick={() => (init.value = init.value ? undefined : 10)}>切换默认值</button>
      <SimpleStateWithDefaultValueComponent
        class={'aaaa'}
        initialValue={init.value}
        // @ts-ignore
        data-a={1111}
      ></SimpleStateWithDefaultValueComponent>
    </div>
  )
})

export default SimpleComponent
