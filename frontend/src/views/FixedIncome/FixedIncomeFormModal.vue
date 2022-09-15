<template>
  <BaseModal size="md" :active="activeModal" @close="closeModal" persistent>
    <div class="flex justify-between p-4 border-b">
      <h1>Cadastro Renda Fixa</h1>
      <button class="text-xl text-gray-600 focus:outline-none" @click="closeModal">&times;</button>
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
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
  import { defineAsyncComponent, inject, ref } from 'vue'
  import { reset } from '@formkit/core'
  import { getNode } from '@formkit/core'
  import Button from '@/components/Button/index.vue'
  const emit = defineEmits(['submit-form', 'close-modal'])
  const BaseModal = defineAsyncComponent(() => import('@/components/BaseModal/index.vue'))


  const { activeModal = false } = defineProps<{ activeModal?: boolean }>()
  let loading = ref<boolean>(false)

  function submit(value: any) {
    loading.value = true
    // emit('submit-form', value)
  }

  function closeModal() {
    loading.value = false
    const form = getNode('variableIncomeForm')
    form?.clearErrors()
    reset('variableIncomeForm')
    emit('close-modal')
  }
</script>

<style scoped>
  .form-class {
    max-width: 100%;
  }
</style>
