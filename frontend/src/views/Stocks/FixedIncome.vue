<template>
  <main class="container mx-auto py-4 px-4">
    <div class="py-4">
      <div class="flex gap-4 justify-between content-center">
        <h2 class="text-xl font-semibold leading-tight">Renda Fixa</h2>
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
    { text: 'Categoria', value: 'category.name' },
    { text: 'Subcategoria', value: 'subcategory.name' },
    { text: 'Nome', value: 'name' },
    { text: 'Código', value: 'code' },
    { text: 'Custo Aquisição', value: 'acquisition_cost', sortable: true },
    { text: 'Preço Atual', value: 'current_price', sortable: true },
    { text: 'Quantidade', value: 'quantity', sortable: true },
  ]
  const items: Array<any> = [
    // {
    //   category: {
    //     name: 'Ações Brasil',
    //   },
    //   subcategory: {
    //     name: 'Fundo de Fundos',
    //   },
    //   name: 'FII BTG PACTUAL',
    //   code: 'BRCR11',
    //   acquisition_cost: '71.82',
    //   current_price: '68.10',
    //   quantity: 10,
    // },
    // {
    //   category: {
    //     name: 'Fundo Imobiliário',
    //   },
    //   subcategory: {
    //     name: 'Fundo de Fundos',
    //   },
    //   name: 'abv',
    //   code: 'BRCR11',
    //   acquisition_cost: '71.82',
    //   current_price: '10.10',
    //   quantity: 10,
    // },
  ]
</script>

<style scoped lang="postcss">
  .active {
    @apply border-b-2 border-indigo-600 text-indigo-600 font-semibold;
  }
</style>
