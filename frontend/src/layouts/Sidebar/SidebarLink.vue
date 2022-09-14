<template>
  <a
    v-if="href"
    :href="href"
    :class="[
      'p-2 flex items-center gap-2 rounded-md transition-colors',
      {
        'text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-dark-eval-2':
          !active,
        'text-white bg-primary-500 shadow-lg hover:bg-primary-600': active,
      },
    ]"
  >
    <slot name="icon">
    </slot>

    <span class="text-base font-medium">{{
      title
    }}</span>
  </a>
  <router-link
    v-else-if="to"
    :to="to"
    :class="[
      'p-2 flex items-center gap-2 rounded-md transition-colors',
      {
        'text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-dark-eval-2':
          !active,
        'text-white bg-primary-500 shadow-lg hover:bg-primary-600': active,
      },
    ]"
  >
    <slot name="icon">
    </slot>

    <span class="text-base font-medium">{{
      title
    }}</span>
  </router-link>
  <button
    v-else
    type="button"
    :class="[
      'p-2 w-full flex items-center gap-2 rounded-md transition-colors',
      {
        'text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-dark-eval-2':
          !active,
        'text-white bg-primary-500 shadow-lg hover:bg-primary-600': active,
      },
    ]"
  >
    <slot name="icon">
    </slot>

    <span class="text-base font-medium">{{
      title
    }}</span>
    <slot name="arrow" ></slot>
  </button>
</template>

<script setup>

  const props = defineProps({
    href: {
      type: String,
      required: false,
    },
    to: {
      type: [String, Object],
      required: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  })
</script>
