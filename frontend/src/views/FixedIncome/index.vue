<template>
  <main class="container mx-auto py-4 px-4">
    <div class="py-4">
      <div class="flex gap-4 justify-between content-center">
        <h2 class="text-xl font-semibold leading-tight">Renda Fixa</h2>
        <Button pill @click="openModal">Adicionar</Button>
      </div>
    </div>
    <div class="flex flex-col">
      <Card>
        <div class="rounded-lg border border-gray-200 p-2">
          <div class="grid grid-cols-5 gap-2">
            <CardInfo
              v-for="(item, index) in infos"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></CardInfo>
          </div>
        </div>
        <Table :items="items" :headers="headers">
          <template #item-value="{ item }">
            {{ money(item.value) }}
          </template>

          <template #item-initial_date="{ item }">
            {{ date(item.initial_date) }}
          </template>

          <template #item-final_date="{ item }">
            {{ date(item.final_date) }}
          </template>
        </Table>
      </Card>
    </div>
  </main>
  <BaseModal persistent ref="modal" title="Cadastro Renda Fixa" @close="closeModal">
    <FixedIncomeForm ref="form" @submit="submitForm"> </FixedIncomeForm>
  </BaseModal>
</template>

<script setup lang="ts">
  import { defineAsyncComponent, onMounted, ref, inject } from 'vue'
  import Card from '@/components/Card/index.vue'
  import Table from '@/components/Table/index.vue'
  import CardInfo from '@/components/CardInfo/index.vue'
  import Button from '@/components/Button/index.vue'
  import { money, date } from '../../utils/functions'
  import FixedIncome from '../../interfaces/FixedIncome'
  import InfoCard from '../../interfaces/InforCard'
  import FixedIncomeFormType from '../../interfaces/FixedIncomeFormType'
  import Api from '../../services/Api'

  const BaseModal = defineAsyncComponent(() => import('@/components/BaseModal/index.vue'))
  const FixedIncomeForm = defineAsyncComponent(() => import('./FixedIncomeForm.vue'))
  const FixedIncomeService = inject('FixedIncomeService') as Api<FixedIncome>

  const modal = ref<InstanceType<typeof BaseModal> | null>(null)
  const form = ref<InstanceType<typeof FixedIncomeForm> | null>(null)

  const infos = ref<InfoCard[]>([])
  const items = ref<FixedIncome[]>([])
  const headers = [
    { text: 'Classe', value: 'stock_class.name' },
    { text: 'Subcategoria', value: 'subcategory.name' },
    { text: 'Nome', value: 'name' },
    { text: 'Valor', value: 'value', sortable: true },
    { text: 'Data Inicial', value: 'initial_date', sortable: true },
    { text: 'Data Vencimento', value: 'final_date', sortable: true },
  ]

  onMounted(async () => {
    getFixedIncomes()
  })

  function openModal() {
    modal.value?.open()
  }

  function closeModal() {
    form.value?.resetForm()
  }

  function submitForm(data: FixedIncomeFormType) {
    console.log(data)
  }

  async function getFixedIncomes(): Promise<void> {
    const data = await FixedIncomeService.get()
    items.value = data
    createInfosCard(data)
  }

  function createInfosCard(data: FixedIncome[]) {
    infos.value = []
    const totalValue = data.reduce((accumulator: number, current) => accumulator + current.value, 1)
    // const totalCurrentPrice = data.reduce(
    //   (accumulator: number, current) => accumulator + current.current_price,
    //   1
    // )
    infos.value.push({ label: 'Quantidade de ativos', value: data.length })
    // infos.value.push({ label: 'Saldo Bruto', value: money(totalCurrentPrice) })
    infos.value.push({ label: 'Valor Investido', value: money(totalValue) })
    // infos.value.push({ label: 'Resultado', value: money(totalCurrentPrice - totalAcquisitionCost) })
    // infos.value.push({
    //   label: 'Resultado %',
    //   value: profitability(totalCurrentPrice, totalCurrentPrice - totalAcquisitionCost),
    // })
  }

  function submitFormModal(data: any) {}
</script>

<style scoped lang="postcss"></style>
