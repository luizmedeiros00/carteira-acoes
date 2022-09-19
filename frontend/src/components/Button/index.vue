<template>
  <button :type="type" :class="classes" @click="handleClick" :disabled="disabled || loading">
    <span v-if="srText" class="sr-only">{{ srText }}</span>

    <template v-if="loading">
      <svg
        role="status"
        class="inline mr-3 w-4 h-4 text-white animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
      Aguarde...
    </template>

    <slot v-else :iconSizeClasses="iconSizeClasses"></slot>
  </button>
</template>

<script setup>
  import { toRefs, computed } from 'vue'

  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'black'].includes(
          value
        )
      },
    },
    type: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'base',
      validator(value) {
        return ['sm', 'base', 'lg'].includes(value)
      },
    },
    squared: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
    srText: {
      type: String || undefined,
      default: undefined,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  })

  const emit = defineEmits(['click'])

  const { type, variant, size, squared, pill, href, iconOnly, srText } = props

  const { disabled } = toRefs(props)

  const baseClasses = [
    'inline-flex items-center transition-colors font-medium select-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none dark:focus:ring-offset-dark-eval-2',
  ]

  const variantClasses = (variant) => ({
    'bg-primary-500 text-white hover:bg-primary-600 ': variant == 'primary',
    'bg-white text-gray-500 hover:bg-gray-100 focus:ring-purple-500 dark:text-gray-400 dark:bg-dark-eval-1 dark:hover:bg-dark-eval-2 dark:hover:text-gray-200':
      variant == 'secondary',
    'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500': variant == 'success',
    'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500': variant == 'danger',
    'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500': variant == 'warning',
    'bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500': variant == 'info',
    'bg-black text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-black dark:hover:bg-dark-eval-3':
      variant == 'black',
  })

  const classes = computed(() => [
    ...baseClasses,
    iconOnly
      ? {
          'p-1.5': size == 'sm',
          'p-2': size == 'base',
          'p-3': size == 'lg',
        }
      : {
          'px-2.5 py-1.5 text-sm': size == 'sm',
          'px-4 py-2 text-base': size == 'base',
          'px-5 py-2 text-xl': size == 'lg',
        },
    variantClasses(variant),
    {
      'rounded-md': !squared && !pill,
      'rounded-full': pill,
    },
    {
      'pointer-events-none opacity-50': href && disabled.value,
    },
  ])

  const iconSizeClasses = [
    {
      'w-5 h-5': size == 'sm',
      'w-6 h-6': size == 'base',
      'w-7 h-7': size == 'lg',
    },
  ]

  const handleClick = (e) => {
    if (disabled.value) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
    emit('click', e)
  }
</script>
