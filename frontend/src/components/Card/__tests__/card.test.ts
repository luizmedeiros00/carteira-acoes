import { shallowMount, mount, VueWrapper } from '@vue/test-utils'
import Card from '../index.vue'

describe('Card component', () => {
  type Instance = InstanceType<typeof Card>
  let mountFunction: (options?: object) => VueWrapper<Instance>

  beforeEach(() => {
    mountFunction = (options = {}) => {
      return shallowMount(Card, {
        ...options,
      })
    }
  })

  test('should render component with props title and snapshot', () => {
    const wrapper = mountFunction({
      props: {
        title: 'Title Card'
      }
    })
    expect(wrapper.find('h2').exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render component without props title and snapshot', () => {
    const wrapper = mountFunction({})

    expect(wrapper.find('h2').exists()).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
})