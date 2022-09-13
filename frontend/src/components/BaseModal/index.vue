<template>
  <teleport to="body">
    <div
      v-show="active"
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      @click="close"
    >
      <div
        class="overflow-hidden bg-white rounded-lg fixed animate__animated animate__fadeInDown animate__faster"
        :class="{
          'w-4/12': size === 'sm',
          'w-6/12': size === 'md',
          'w-10/12': size === 'lg',
        }"
        @click.stop
      >
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  const emit = defineEmits(['close'])
  interface Props {
    active?: boolean
    persistent?: boolean
    size?: 'md' | 'sm' | 'lg'
  }
  const { active = false, size = 'md', persistent = false } = defineProps<Props>()

  function close() {
    if (persistent) return
    emit('close')
  }

</script>
<style scoped>

</style>
