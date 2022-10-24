// import Button from '../index.vue'
import Button from '../index'
import { mount, shallowMount, } from '@vue/test-utils'

describe('Button Component', () => {

  test('should render component and match snapshot', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render component with slot', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button Name'
      }
    })
    expect(wrapper.html()).toContain('Button Name')
  })

  test('should render component with loader and Aguarde name', async () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button Name'
      }
    })
    expect(wrapper.html()).toContain('Button Name')

    await wrapper.setProps({ loading: true })

    expect(wrapper.html()).toContain('Aguarde')
  })

  test('should have rounded-full class when props pill is set to true', () => {
    const wrapper = shallowMount(Button, {
      props: {
        rounded: true
      }
    })
    expect(wrapper.classes('rounded-full')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should emit event when click', async () => {
    const wrapper = shallowMount(Button, {
      props: {
        loading: false,
        disabled: false
      }
    })

    await wrapper.find('button').trigger('click')
    // await wrapper.vm.$nextTick();
    console.log(wrapper.emitted('click'), 'aqio')
   expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
