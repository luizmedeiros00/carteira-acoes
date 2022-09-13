<template>
  <div class="flex flex-col gap-2 p-2 border-l-2">
    <h6 class="text-[10px] font-medium text-gray-400 uppercase">{{ props.label }}</h6>
    <h4 class="text-[14px] font-medium text-primary-500">{{ props.value }}</h4>
  </div>
</template>
<script setup lang="ts">
  interface Props {
    label: string
    value: string
  }

  const props = defineProps<Props>()
</script>
