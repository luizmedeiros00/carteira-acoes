<template>
  <FormKit
    type="form"
    id="variableIncomeForm"
    submit-label="Salvar"
    @submit="submit"
    :actions="false"
    :config="{ validationVisibility: 'submit' }"
    :incomplete-message="false"
  >
    <div class="grid grid-cols-2 gap-2">
      <FormKit
        id="date"
        type="date"
        name="purchase_at"
        label="Data da compra"
        validation="required"
      />
      <FormKit type="text" name="code" label="Código do ativo" validation="required" />
      <FormKit type="number" name="quantity" label="Quantidade" validation="required|min:1" />
      <FormKit type="text" name="acquisition_cost" label="Valor" validation="required" />
    </div>
    <div class="mt-5">
      <Button pill type="submit" :loading="btnLoading">Salvar</Button>
    </div>
  </FormKit>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { reset } from '@formkit/core'
  import { getNode } from '@formkit/core'
  import Button from '@/components/Button/index.vue'

  import VariableIncomeFormType from '../../interfaces/VariableIncomeFormType'

  const emit = defineEmits<{
    (e: 'submit', value: VariableIncomeFormType): void
  }>()

  let btnLoading = ref<boolean>(false)

  const loading = (state: boolean) => (btnLoading.value = state)

  function submit(data: VariableIncomeFormType) {
    emit('submit', data)
  }

  function resetForm() {
    btnLoading.value = false
    const form = getNode('variableIncomeForm')
    form?.clearErrors()
    reset('variableIncomeForm')
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
