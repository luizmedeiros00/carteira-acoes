<template>
  <teleport to="body">
    <div
      v-show="active"
      class="modal fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      @click="clickOutSideModal"
    >
      <div
        class="modal-body overflow-hidden bg-white rounded-lg fixed animate__animated animate__fadeInDown animate__faster"
        :class="{
          'w-4/12': size === 'sm',
          'w-6/12': size === 'md',
          'w-10/12': size === 'lg',
        }"
        @click.stop
      >
        <slot name="header"></slot>
        <!-- <div v-if="title" class="flex justify-between p-4 border-b">
          <h1>{{ title }}</h1>
          <button class="text-xl text-gray-600 focus:outline-none" @click="close">&times;</button>
        </div> -->
        <slot></slot>
        <!-- <div class="p-4 gap-2">
        </div> -->
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const emit = defineEmits(['close'])

  interface Props {
    persistent?: boolean
    size?: 'md' | 'sm' | 'lg'
  }
  const { size = 'md', persistent = false } = defineProps<Props>()
  const active = ref<boolean>(false)
  const toggle = (value: boolean) => (active.value = value)

  function clickOutSideModal() {
    if (persistent) return
    emit('close')
    toggle(false)
  }

  defineExpose({
    toggle,
  })
</script>
<style scoped></style>
