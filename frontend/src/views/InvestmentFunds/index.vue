<template>
  <main class="container mx-auto py-4 px-4">
    <div class="py-4">
      <div class="flex gap-4 justify-between content-center">
        <h2 class="text-xl font-semibold leading-tight">Fundos de investimento</h2>
        <Button pill @click="openModal">Adicionar</Button>
        <Button pill @click="toggleModal">Adicionar</Button>
      </div>
    </div>
    <div class="flex flex-col">
      <Card>
        <Table :items="items" :headers="headers">
          <template #item-acquisition_cost="{ item }">
            {{ money(item.acquisition_cost) }}
          </template>

          <template #item-current_price="{ item }">
            {{ money(item.current_price) }}
          </template>
        </Table>
      </Card>
    </div>
  </main>
  <InvestmentFundsFormModal ref="modal"></InvestmentFundsFormModal>
</template>

<script setup lang="ts">
  import Card from '@/components/Card/index.vue'
  import Table from '@/components/Table/index.vue'
  import Button from '@/components/Button/index.vue'
  import InvestmentFundsFormModal from './InvestmentFundsFormModal.vue'
  import { money } from '../../utils/functions'
  import { ref } from 'vue'

  const headers = [
    { text: 'Classe', value: 'stock_class.name' },
    { text: 'Nome', value: 'name' },
    { text: 'CNPJ', value: 'cnpj' },
    { text: 'Valor', value: 'value', sortable: true },
  ]
  const items: Array<any> = []

  const modal = ref<InstanceType<typeof InvestmentFundsFormModal> | null>(null)

  function openModal() {
    modal.value?.open()
  }
  function toggleModal() {
    modal.value?.loading(true)
  }
</script>

<style scoped lang="postcss">
  .active {
    @apply border-b-2 border-indigo-600 text-indigo-600 font-semibold;
  }
</style>
