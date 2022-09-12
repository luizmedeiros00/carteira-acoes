<template>
  <div class="flex p-4 border-b">
    <h1>Cadastro Renda Variável</h1>
  </div>
  <div class="p-4 gap-2">
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
        <FormKit type="submit" label="Salvar" />
      </div>

    </FormKit>
  </div>
  <!-- <div class="flex gap-2 p-4 border-t">
    <Button pill @click="submit">Cadastrar</Button>
    <Button pill variant="secondary" @click="submit">Fechar</Button>
  </div> -->
</template>

<script setup lang="ts">
  import { onActivated, ref } from 'vue'
  import { reset } from '@formkit/core'
  import { getNode } from '@formkit/core'
  const emit = defineEmits(['submit-form'])

  function submit(value: object) {
    console.log(value)
  }

  onActivated(() => {
    console.log('aqui')
    const form = getNode('variableIncomeForm')
    form?.clearErrors()
    console.log(form)
    reset('variableIncomeForm')
  })
</script>

<style scoped>
  .form-class {
    max-width: 100%;
  }
</style>
