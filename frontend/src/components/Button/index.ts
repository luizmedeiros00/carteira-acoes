import { h, defineComponent, VNode } from 'vue'
import './Button.css'
import Spinner from '../BaseIcon/Spinner/index.vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'ButtonComponent',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
      validator(value: string) {
        return ['sm', 'md', 'lg'].includes(value)
      },
    },
    color: {
      type: String,
      default: 'primary',
      validator(value: string) {
        return ['primary', 'success', 'danger', 'warning', 'info'].includes(value)
      },
    }
  },
  methods: {
    teste() {
      if (this.disabled) return
      this.$emit('click')
    }
  },
  computed: {
    classes(): any {
      return [
        'btn',
        this.size,
        this.color,
        this.rounded ? 'rounded-full' : 'rounded',
        {
          'disabled': this.disabled || this.loading
        }
      ]
    },
    getLoader(): VNode[] {
      return [
        h(Spinner, {
          class: 'inline mr-3 w-4 h-4 text-white animate-spin'
        }),
        h('span', 'Aguarde'),
      ]
    }
  },

  render() {
    return h('button',
      {
        class: this.classes,
        onClick: () => this.teste()
      },
      this.loading ? this.getLoader : this.$slots?.default?.()
    )
  }



})
