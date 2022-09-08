<template>
  <div class="block p-3 bg-white rounded-lg border border-gray-200 w-full shadow-md">
    <h2 v-if="title" class="text-base font-medium text-slate-500 mb-5">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

  interface Props {
    title?: string
  }
  const { title } = defineProps<Props>()

</script>
