<template>
  <FormKit
    type="form"
    id="investmentFundForm"
    submit-label="Salvar"
    @submit="submit"
    :actions="false"
    :config="{ validationVisibility: 'submit' }"
    :incomplete-message="false"
  >
    <div class="grid grid-cols-2 gap-2">
      <FormKit
        id="stock_class"
        type="select"
        name="stock_class"
        label="Classe do ativo"
        validation="required"
        placeholder="Selecione a classe"
        :options="{
          1: 'Ações Brasil',
          2: 'Ações EUA',
          3: 'Renda Fixa',
        }"
      />
      <FormKit type="text" name="name" label="Nome" validation="required" />
      <FormKit type="text" name="cnpj" label="CNPJ" validation="required" />
      <FormKit type="text" name="value" label="Valor" validation="required" />
    </div>
    <div class="mt-5">
      <Button pill type="submit" :loading="btnLoagin">Salvar</Button>
    </div>
  </FormKit>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { reset } from '@formkit/core'
  import { getNode } from '@formkit/core'
  import Button from '@/components/Button/index.vue'
  import InvestimentFundsType from '../../interfaces/InvestmentFundsFormType'

  const emit = defineEmits<{
    (e: 'submit', value: InvestimentFundsType): void
  }>()

  const btnLoagin = ref<boolean>(false)
  const loading = (state: boolean) => (btnLoagin.value = state)

  function submit(data: InvestimentFundsType): void {
    emit('submit', data)
  }

  function resetForm() {
    btnLoagin.value = false
    const form = getNode('investmentFundForm')
    form?.clearErrors()
    reset('investmentFundForm')
  }

  defineExpose({
    resetForm,
    loading,
  })
</script>

<style scoped>
  .form-class {
    max-width: 100%;
  }
</style>
