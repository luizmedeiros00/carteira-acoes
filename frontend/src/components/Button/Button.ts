import { h, defineComponent, computed } from 'vue'
import './Button.css'

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    title: String,
  },

  setup(props, ctx) {
    const classes = computed(() => ({ btn: true }))
    console.log(classes.value)
    return () => h('button', { class: classes.value, innerHTML: props.title })
  },
})
