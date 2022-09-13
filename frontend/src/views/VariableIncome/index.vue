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
            <template v-for="(item, index) in infos" :key="index">
              <CardInfo :label="item.label" :value="item.value"></CardInfo>
            </template>
          </div>
        </div>

        <Table :items="items" :headers="headers" :loading="loading">
          <template #item-acquisition_cost="{ item }">
            {{ $filters.money(item.acquisition_cost) }}
          </template>

          <template #item-current_price="{ item }">
            {{ $filters.money(item.current_price) }}
          </template>
        </Table>
        <Pagination></Pagination>
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
  import { ref, defineAsyncComponent, inject, onMounted } from 'vue'
  import Card from '@/components/Card/index.vue'
  import Table from '@/components/Table/index.vue'
  import Button from '@/components/Button/index.vue'
  import Pagination from '@/components/Pagination/index.vue'
  import CardInfo from '@/components/CardInfo/index.vue'
  import Api from '../../services/Api'
  const VariableIncomeFormModal = defineAsyncComponent(
    () => import('./VariableIncomeFormModal.vue')
  )
  const VariableIncomeService = inject('VariableIncomeService') as Api

  onMounted(async () => {
    await getVariableIncomes()
  })

  let activeModal = ref<boolean>(false)
  let items = ref<any>([])
  let loading = ref<boolean>(false)

  const headers = [
    { text: 'Categoria', value: 'category.name' },
    { text: 'Subcategoria', value: 'subcategory.name' },
    { text: 'Nome', value: 'name' },
    { text: 'Código', value: 'code' },
    { text: 'Custo Aquisição', value: 'acquisition_cost', sortable: true },
    { text: 'Preço Atual', value: 'current_price', sortable: true },
    { text: 'Quantidade', value: 'quantity', sortable: true },
  ]

  const infos: Array<{ label: string; value: string }> = [
    {
      label: 'Quantidade Ativos',
      value: '15'
    },
    {
      label: 'Saldo Bruto',
      value: 'R$ 1.000,00'
    },
    {
      label: 'VALOR INVESTIDO',
      value: 'R$ 1.000,00'
    },
    {
      label: 'Resultado',
      value: 'R$ 1.000,00'
    },
    {
      label: 'Resultado %',
      value: '20%'
    }
  ]

  async function getVariableIncomes() {
    try {
      loading.value = true
      const data = await VariableIncomeService.get()
      items.value = data
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  function toggleModal(active: boolean) {
    activeModal.value = active
  }

  function submitFormModal(items: any) {
    console.log(items)
  }
</script>

<style scoped lang="postcss">
  .active {
    @apply border-b-2 border-indigo-600 text-indigo-600 font-semibold;
  }
</style>
