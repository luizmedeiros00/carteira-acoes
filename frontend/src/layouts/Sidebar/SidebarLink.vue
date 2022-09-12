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
      <!-- <EmptyCircleIcon aria-hidden="true" class="flex-shrink-0 w-6 h-6" /> -->
      empty
    </slot>

    <span class="text-base font-medium" v-show="true || false">{{
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
      <!-- <EmptyCircleIcon aria-hidden="true" class="flex-shrink-0 w-6 h-6" /> -->
      empty
    </slot>

    <span class="text-base font-medium" v-show="true || false">{{
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
      <!-- <EmptyCircleIcon aria-hidden="true" class="flex-shrink-0 w-6 h-6" /> -->
      empty
    </slot>

    <span class="text-base font-medium" v-show="true || false">{{
      title
    }}</span>
    <slot name="arrow" ></slot>
  </button>
</template>

<script setup>
  // import { sidebarState } from '@/composables'
  // import { EmptyCircleIcon } from '@/components/icons/outline'

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
