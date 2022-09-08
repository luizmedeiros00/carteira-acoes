<template>
   <main class="container mx-auto py-4 px-4">
    <div class="py-4">
      <div class="flex gap-4 justify-between content-center">
        <h2 class="text-xl font-normal leading-tight">Fundos de Invetimento</h2>
        <button class="bg-blue-600 rounded-full p-3 text-white text-sm hover:bg-blue-500">
          Adicionar Produto
        </button>
      </div>
    </div>
    <div class="flex flex-col">
      <Card>
        <Table :items="items" :headers="headers">
          <template #item-acquisition_cost="{ item }">
            {{ $filters.money(item.acquisition_cost) }}
          </template>

          <template #item-current_price="{ item }">
            {{ $filters.money(item.current_price) }}
          </template>
        </Table>
      </Card>
    </div>
  </main>
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
