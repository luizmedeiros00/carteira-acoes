import BaseModal from '../index.vue'

import { shallowMount, mount, VueWrapper } from '@vue/test-utils'

describe('BaseModal', () => {

  type Instance = InstanceType<typeof BaseModal>
  let mountFunction: (options?: object) => VueWrapper<Instance>

  beforeEach(() => {

    mountFunction = (options = {}) => {
      return mount(BaseModal, {
        global: {
          stubs: { teleport: true }
        },
        ...options,
      })
    }
  })

  test('should render component and match snapshot', () => {
    const wrapper = mountFunction({
      props: {
        title: 'Title component'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should not show the component', () => {
    const wrapper = mountFunction({
      props: {
        title: 'Title component'
      }
    })

    console.log(wrapper.vm.)
    // expect(wrapper.find('.modal-body').isVisible()).toBe(false)
  })
})