<template>
  <main class="container mx-auto py-4 px-4">
    <div class="py-4">
      <div class="flex gap-4 justify-between content-center">
        <h2 class="text-xl font-semibold leading-tight">Fundos de investimento</h2>
        <Button pill @click="openModal">Adicionar</Button>
      </div>
    </div>
    <div class="flex flex-col">
      <Card>
        <Table :items="items" :headers="headers">
          <template #item-value="{ item }">
            {{ money(item.value) }}
          </template>
        </Table>
      </Card>
    </div>
  </main>
  <BaseModal persistent title="Cadastro Fundo de Investimento" ref="modal" @close="closeModal">
    <InvestmentFundsForm ref="form" @submit="submitForm"></InvestmentFundsForm>
  </BaseModal>
</template>

<script setup lang="ts">
  import { ref, defineAsyncComponent, inject, onMounted } from 'vue'
  import { money } from '../../utils/functions'
  import Card from '@/components/Card/index.vue'
  import Table from '@/components/Table/index.vue'
  import Button from '@/components/Button/index.vue'
  import InvestmentFundsForm from './InvestmentFundsForm.vue'
  import InvestmentFundsFormType from '../../interfaces/InvestmentFundsFormType'
  import InvestmentFundsType from '../../interfaces/InvestmentFundsType'
  import Api from '../../services/Api'
  const BaseModal = defineAsyncComponent(() => import('@/components/BaseModal/index.vue'))

  const InvestmentFundsService = inject('InvestmentFundsService') as Api<InvestmentFundsType>

  const modal = ref<InstanceType<typeof BaseModal> | null>(null)
  const form = ref<InstanceType<typeof InvestmentFundsForm> | null>(null)
  const items = ref<InvestmentFundsType[]>([])
  const headers = [
    { text: 'Classe', value: 'stock_class.name' },
    { text: 'Nome', value: 'name' },
    { text: 'CNPJ', value: 'cnpj' },
    { text: 'Valor', value: 'value', sortable: true },
  ]

  onMounted(() => {
    getInvestmentFunds()
  })

  async function getInvestmentFunds(): Promise<void>{
    const data = await InvestmentFundsService.get()
    items.value = data
  }

  function openModal() {
    modal.value?.open()
  }

  function closeModal() {
    form.value?.resetForm()
  }

  function submitForm(data: InvestmentFundsFormType) {
    console.log(data)
  }
</script>
