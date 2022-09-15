<template>
  <main class="container mx-auto py-4 px-4">
    <div class="py-4">
      <div class="flex gap-4 justify-between content-center">
        <h2 class="text-xl font-semibold leading-tight">Renda Fixa</h2>
        <button
          @click="toggleModal(true)"
          class="bg-blue-600 rounded-full p-3 text-white text-sm hover:bg-blue-500"
        >
          Adicionar Produto
        </button>
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
  <FixedIncomeFormModal
    :active-modal="activeModal"
    @submit-form="submitFormModal"
    @close-modal="toggleModal(false)"
  >
  </FixedIncomeFormModal>
</template>

<script setup lang="ts">
  import { defineAsyncComponent, onMounted, ref, inject } from 'vue'
  import Card from '@/components/Card/index.vue'
  import Table from '@/components/Table/index.vue'
  import { money } from '../../utils/functions'
  import FixedIncome from 'src/interfaces/FixedIncome'
  import Api from 'src/services/Api'

  const FixedIncomeFormModal = defineAsyncComponent(() => import('./FixedIncomeFormModal.vue'))
  const FixedIncomeService = inject('FixedIncomeService') as Api<FixedIncome>
  const activeModal = ref<boolean>(false)
  const items = ref<FixedIncome[]>([])
  const headers = [
    { text: 'Subcategoria', value: 'subcategory.name' },
    { text: 'Nome', value: 'name' },
    { text: 'Valor', value: 'value', sortable: true },
    { text: 'Data Inicial', value: 'initial_date', sortable: true },
    { text: 'Data Vencimento', value: 'final_date', sortable: true },
  ]

  onMounted(async () => {
    getFixedIncomes()
  })

  async function getFixedIncomes(): Promise<void> {
    const data = await FixedIncomeService.get()
    items.value = data
  }

  function toggleModal(active: boolean) {
    activeModal.value = active
  }

  function submitFormModal(data: any) {}
</script>

<style scoped lang="postcss"></style>
