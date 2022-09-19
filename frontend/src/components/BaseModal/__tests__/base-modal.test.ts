import BaseModal from '../index.vue'
import { h } from 'vue'
import { shallowMount, mount, VueWrapper } from '@vue/test-utils'

describe('BaseModal', () => {
  type Instance = InstanceType<typeof BaseModal>
  let mountFunction: (options?: object) => VueWrapper<Instance>

  beforeEach(() => {
    mountFunction = (options = {}) => {
      return shallowMount(BaseModal, {
        global: {
          stubs: { teleport: true },
        },
        ...options,
      })
    }
  })

  test('should render component and match snapshot', () => {
    const wrapper = mountFunction()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render component and match snapshot with props size is set sm', () => {
    const wrapper = mountFunction({
      props: {
        size: 'sm',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should render component and match snapshot with props size is set lg', () => {
    const wrapper = mountFunction({
      props: {
        size: 'lg',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should show component when call toggle method', async () => {
    const wrapper = mountFunction({ attachTo: document.body })

    expect(wrapper.get('.modal').isVisible()).toBe(false)

    await wrapper.vm.toggle(true)
    expect(wrapper.get('.modal').isVisible()).toBe(true)
  })

  test('should close component when click outside and props persistent is set to false', async () => {
    const wrapper = mountFunction({
      attachTo: document.body,
      props: { persistent: false },
    })

    await wrapper.vm.toggle(true)
    expect(wrapper.get('.modal').isVisible()).toBe(true)

    await wrapper.find('.modal').trigger('click')
    expect(wrapper.get('.modal').isVisible()).toBe(false)
  })

  test('should not close component when click outside and props persistent is set to true', async () => {
    const wrapper = mountFunction({
      attachTo: document.body,
      props: { persistent: true },
    })

    await wrapper.vm.toggle(true)
    expect(wrapper.get('.modal').isVisible()).toBe(true)

    await wrapper.find('.modal').trigger('click')
    expect(wrapper.get('.modal').isVisible()).toBe(true)
  })

  test('should render slots', () => {
    const wrapper = mountFunction({
      attachTo: document.body,
      slots: {
        default: 'Default',
        header: '<h1>Title Modal</h1>',
      },
    })

    expect(wrapper.html()).toContain('Default')
    expect(wrapper.html()).toContain('<h1>Title Modal</h1>')
  })
})
