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
            {{ money(item.acquisition_cost) }}
          </template>

          <template #item-current_price="{ item }">
            {{ money(item.current_price) }}
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
  import { money, profitability } from '../../utils/functions'
  const VariableIncomeFormModal = defineAsyncComponent(
    () => import('./VariableIncomeFormModal.vue')
  )
  const VariableIncomeService = inject('VariableIncomeService') as Api

  onMounted(async () => {
    await getVariableIncomes()
  })

  interface InfoCard {
    label: string
    value: string | null | number
  }

  let activeModal = ref<boolean>(false)
  let items = ref<any>([])
  let loading = ref<boolean>(false)
  let infos = ref<InfoCard[]>([])

  const headers = [
    { text: 'Categoria', value: 'category.name' },
    { text: 'Subcategoria', value: 'subcategory.name' },
    { text: 'Nome', value: 'name' },
    { text: 'Código', value: 'code' },
    { text: 'Custo Aquisição', value: 'acquisition_cost', sortable: true },
    { text: 'Preço Atual', value: 'current_price', sortable: true },
    { text: 'Quantidade', value: 'quantity', sortable: true },
  ]

  async function getVariableIncomes() {
    try {
      loading.value = true
      const data = await VariableIncomeService.get()
      items.value = data
      createInfosCard(data)
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  function createInfosCard(data: Array<any>) {
    infos.value = []
    const totalAcquisitionCost = data.reduce(
      (accumulator: number, current) => accumulator + current.acquisition_cost,
      1
    )
    const totalCurrentPrice = data.reduce(
      (accumulator: number, current) => accumulator + current.current_price,
      1
    )
    infos.value.push({ label: 'Quantidade de ativos', value: data.length })
    infos.value.push({ label: 'Saldo Bruto', value: money(totalCurrentPrice) })
    infos.value.push({ label: 'Valor Investido', value: money(totalAcquisitionCost) })
    infos.value.push({ label: 'Resultado', value: money(totalCurrentPrice - totalAcquisitionCost) })
    infos.value.push({
      label: 'Resultado %',
      value: profitability(totalCurrentPrice, totalCurrentPrice - totalAcquisitionCost),
    })
  }

  function toggleModal(active: boolean) {
    // activeModal.value = active
    getVariableIncomes()
  }

  function submitFormModal(items: any) {
    console.log(items)
  }
</script>

<style scoped lang="postcss"></style>
