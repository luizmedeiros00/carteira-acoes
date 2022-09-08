<template>
  <Table :items="items" :headers="headers">
    <template #item-acquisition_cost="{ item }">
      {{ $filters.money(item.acquisition_cost) }}
    </template>

    <template #item-current_price="{ item }">
      {{ $filters.money(item.current_price) }}
    </template>
  </Table>
</template>

<script setup lang="ts">
  import Card from '@/components/Card/index.vue'
  import Table from '@/components/Table/index.vue'

  const headers = [
    { text: 'Classe', value: 'subcategory.name' },
    { text: 'Nome', value: 'name' },
    { text: 'Saldo Atual', value: 'acquisition_cost', sortable: true },
  ]
  const items: Array<any> = [
  ]
</script>

<style scoped lang="postcss">
  .active {
    @apply border-b-2 border-indigo-600 text-indigo-600 font-semibold;
  }
</style>
