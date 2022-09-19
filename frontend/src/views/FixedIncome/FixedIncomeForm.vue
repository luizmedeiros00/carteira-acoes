<template>
  <FormKit
    type="form"
    id="fixedIncomeForm"
    submit-label="Salvar"
    @submit="submit"
    :actions="false"
    :config="{ validationVisibility: 'submit' }"
    :incomplete-message="false"
  >
    <div class="grid grid-cols-2 gap-2">
      <FormKit
        id="subcategory"
        type="select"
        name="subcategory"
        label="Subcategoria"
        validation="required"
        placeholder="Selecione a subcategoria"
        :options="{
          1: 'Pós fixada',
          2: 'Pré fixada',
          3: 'Tesouro direto',
        }"
      />
      <FormKit id="name" type="text" name="name" label="Papel" validation="required" />
      <FormKit type="text" name="value" label="Valor" validation="required" />
      <FormKit type="date" name="initial_date" label="Data de Início" validation="required" />
      <FormKit type="date" name="final_date" label="Data de vencimento" validation="required" />
    </div>
    <div class="mt-5">
      <Button pill type="submit" :loading="loading">Salvar</Button>
    </div>
  </FormKit>
</template>

<script setup lang="ts">
  import { defineAsyncComponent, ref } from 'vue'
  import { reset } from '@formkit/core'
  import { getNode } from '@formkit/core'
  import Button from '@/components/Button/index.vue'
  import FixedIncomeFormType from '../../interfaces/FixedIncomeFormType'

  const emit = defineEmits<{
    (e: 'submit', value: FixedIncomeFormType): void
  }>()

  let loading = ref<boolean>(false)

  function submit(data: FixedIncomeFormType) {
    emit('submit', data)
  }

  function resetForm() {
    loading.value = false
    const form = getNode('fixedIncomeForm')
    form?.clearErrors()
    reset('fixedIncomeForm')
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
