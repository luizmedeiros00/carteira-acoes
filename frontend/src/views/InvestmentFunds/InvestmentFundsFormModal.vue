<template>
  <BaseModal size="md" :active="activeModal" @close="closeModal" persistent>
    <div class="flex justify-between p-4 border-b">
      <h1>Cadastro Fundo de Investimento</h1>
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
          <Button pill type="submit" :loading="btnLoagin">Salvar</Button>
        </div>
      </FormKit>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
  import { defineAsyncComponent, ref } from 'vue'
  import { reset } from '@formkit/core'
  import { getNode } from '@formkit/core'
  import Button from '@/components/Button/index.vue'
  const emit = defineEmits(['submit-form', 'close-modal'])
  const BaseModal = defineAsyncComponent(() => import('@/components/BaseModal/index.vue'))

  // const { activeModal = false } = defineProps<{ activeModal?: boolean }>()
  const activeModal = ref<boolean>(false)
  const btnLoagin = ref<boolean>(false)
  const open = () => (activeModal.value = true)
  const loading = (state: boolean) => (btnLoagin.value = state)

  function submit(value: any) {
    // loading.value = true
    // emit('submit-form', value)
  }

  function closeModal() {
    activeModal.value = false
    // loading.value = false
    // const form = getNode('variableIncomeForm')
    // form?.clearErrors()
    // reset('variableIncomeForm')
    // emit('close-modal')
  }

  defineExpose({
    open,
    loading
  })
</script>

<style scoped>
  .form-class {
    max-width: 100%;
  }
</style>
