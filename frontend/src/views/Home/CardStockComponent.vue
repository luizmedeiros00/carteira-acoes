<template>
  <div class="pl-2 border-l-4" :style="`border-left-color:${color}`">
    <div class="flex">
      <h5 class="text-[12px] font-bold text-gray-400">{{ props.name }}</h5>
    </div>
    <div class="flex gap-5">
      <div class="flex flex-col">
        <h6 class="text-[10px] font-medium text-gray-400 uppercase">Saldo</h6>
        <h4 class="text-[14px] font-medium" :style="`color:${props.color}`">
          {{ props.total_balance }}
        </h4>
      </div>
      <div class="flex flex-col">
        <h6 class="text-[10px] font-medium text-gray-400 uppercase">%</h6>
        <h4 class="text-[14px] font-medium" :style="`color:${props.color}`">
          {{ props.percentage }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  interface Props {
    id: number
    name: string
    total_balance: string
    percentage: string
    color: string
  }

  const props = defineProps<Props>()
</script>

<style scoped></style>
