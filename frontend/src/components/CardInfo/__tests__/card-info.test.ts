import CardInfo from '../index.vue'

import { shallowMount, VueWrapper } from '@vue/test-utils'

describe('Card Info', () => {

  type Instance = InstanceType<typeof CardInfo>
  let mountFunction: (options?: object) => VueWrapper<Instance>

  beforeEach(() => {
    mountFunction = (options = {}) => {
      return shallowMount(CardInfo, {
        ...options,
      })
    }
  })


  test('should render component and snapshot', () => {
    const wrapper = mountFunction({
      props: {
        label: 'Label test',
        value: 100
      }
    })

    expect(wrapper.html()).toMatchSnapshot()

  })

  test('should render label and value props', () => {
    const wrapper = shallowMount(CardInfo, {
      props: {
        label: 'Label test',
        value: 100
      }
    })

    expect(wrapper.find('h6').text()).toBe('Label test')
    expect(wrapper.find('h4').text()).toBe('100')
  })

})