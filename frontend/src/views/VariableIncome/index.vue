<template>
  <main class="container mx-auto py-4 px-4">
    <div class="py-4">
      <div class="flex gap-4 justify-between content-center">
        <h2 class="text-xl font-semibold leading-tight">Renda Variável</h2>
        <Button pill @click="toggleModal(true)">Adicionar</Button>
      </div>
    </div>
    <div class="flex">
      <Card>
        <div class="rounded-lg border border-gray-200 p-2">
          <div class="grid grid-cols-5 gap-2">
            <div class="flex flex-col gap-2 p-2 border-l-2">
              <h6 class="text-[10px] font-medium text-gray-400 uppercase">Quantidade Ativos</h6>
              <h4 class="text-[14px] font-medium text-blue-600">15</h4>
            </div>
            <div class="flex flex-col gap-2 p-2 border-l-2">
              <h6 class="text-[10px] font-medium text-gray-400 uppercase">Saldo Bruto</h6>
              <h4 class="text-[14px] font-medium text-blue-600">R$ 1.000,00</h4>
            </div>
            <div class="flex flex-col gap-2 p-2 border-l-2">
              <h6 class="text-[10px] font-medium text-gray-400 uppercase">Valor Investido</h6>
              <h4 class="text-[14px] font-medium text-blue-600">R$ 1.000,00</h4>
            </div>
            <div class="flex flex-col gap-2 p-2 border-l-2">
              <h6 class="text-[10px] font-medium text-gray-400 uppercase">Resultado</h6>
              <h4 class="text-[14px] font-medium text-blue-600">R$ 1.000,00</h4>
            </div>
            <div class="flex flex-col gap-2 p-2 border-l-2">
              <h6 class="text-[10px] font-medium text-gray-400 uppercase">Resultado %</h6>
              <h4 class="text-[14px] font-medium text-blue-600">20%</h4>
            </div>
          </div>
        </div>

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
  <VariableIncomeFormModal
    :active-modal="activeModal"
    @submit-form="submitFormModal"
    @close-modal="toggleModal(false)"
  ></VariableIncomeFormModal>
</template>

<script setup lang="ts">
  import { ref, defineAsyncComponent } from 'vue'
  import Card from '@/components/Card/index.vue'
  import Table from '@/components/Table/index.vue'
  import Button from '@/components/Button/index.vue'

  const VariableIncomeFormModal = defineAsyncComponent(
    () => import('./VariableIncomeFormModal.vue')
  )
  let activeModal = ref<boolean>(false)
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

  function toggleModal(active: boolean) {
    activeModal.value = active
  }

  function submitFormModal(value: any) {
    console.log(value)
  }
</script>

<style scoped lang="postcss">
  .active {
    @apply border-b-2 border-indigo-600 text-indigo-600 font-semibold;
  }
</style>
