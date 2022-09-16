<template>
  <div class="mb-3 w-full">
    <label for="exampleFormControlInput1" class="form-label inline-block mb-1 text-gray-700">{{
      props.label
    }}</label>
    <input
      v-model="value"
      type="text"
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      :id="props.id"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const emit = defineEmits(['update:modelValue'])
  interface Props {
    label?: string
    id?: string
    placeholder?: string
    modelValue?: string
  }

  const props = defineProps<Props>()

  const value = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    },
  })
</script>

<style scoped></style>
