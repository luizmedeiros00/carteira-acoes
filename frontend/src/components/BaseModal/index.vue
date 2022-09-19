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
        <div class="flex justify-between p-4 border-b">
          <h1>{{ title }}</h1>
          <button class="text-xl text-gray-600 focus:outline-none" @click="close">&times;</button>
        </div>
        <div class="p-4 gap-2">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const emit = defineEmits(['close'])

  interface Props {
    title: string
    persistent?: boolean
    size?: 'md' | 'sm' | 'lg'
  }
  const { title, size = 'md', persistent = false } = defineProps<Props>()
  const active = ref<boolean>(false)
  const open = () => (active.value = true)
  const close = () => {
    active.value = false
    emit('close')
  }

  function clickOutSideModal() {
    if (persistent) return
    emit('close')
    active.value = false
  }

  defineExpose({
    open,
    close,
  })
</script>
<style scoped></style>
