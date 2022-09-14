<template>
  <div class="relative">
    <SidebarLink @click="isOpen = !isOpen" :title="title" :active="active">
      <template #icon>
        <slot name="icon">
        </slot>
      </template>

      <template #arrow>
        <span
          v-show="true || false"
          aria-hidden="true"
          class="relative block w-6 h-6 ml-auto"
        >
          <span
            :class="[
              'absolute right-[9px] mt-[-5px] h-2 w-[2px] top-1/2 transition-all duration-200',
              {
                '-rotate-45': isOpen,
                'rotate-45': !isOpen,
                'bg-white': active,
                'bg-gray-400': !active,
              },
            ]"
          ></span>
          <span
            :class="[
              'absolute left-[9px] mt-[-5px] h-2 w-[2px] top-1/2 transition-all duration-200',
              {
                'rotate-45': isOpen,
                '-rotate-45': !isOpen,
                'bg-white': active,
                'bg-gray-400': !active,
              },
            ]"
          ></span>
        </span>
      </template>
    </SidebarLink>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
      appear
    >
      <div
        v-show="isOpen"
        class="overflow-hidden transition-all duration-200 max-h-0"
      >
        <ul
          class="relative px-0 pt-2 pb-0 ml-5 before:w-0 before:block before:absolute before:inset-y-0 before:left-0 before:border-l-2 before:border-l-gray-200 dark:before:border-l-gray-600"
        >
          <slot ></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { ref, toRefs, watchEffect } from 'vue'
  import SidebarLink from './SidebarLink.vue'

  interface Props {
    title: string
    active: boolean
  }

  const props = defineProps<Props>()

  const { active } = toRefs(props)

  const isOpen = ref<boolean>(false)

  watchEffect(() => {
    isOpen.value = active.value
  })

  const beforeEnter = (el: any) => {
    el.style.maxHeight = `0px`
  }

  const enter = (el: any) => {
    el.style.maxHeight = `${el.scrollHeight}px`
  }

  const beforeLeave = (el: any) => {
    el.style.maxHeight = `${el.scrollHeight}px`
  }

  const leave = (el: any) => {
    el.style.maxHeight = `0px`
  }
</script>
