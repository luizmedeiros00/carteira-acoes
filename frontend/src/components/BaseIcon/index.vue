<template>
  <component :is="iconComponent" v-bind="$attrs" />
</template>

<script setup lang="ts">
  import { computed, defineAsyncComponent } from 'vue'
  interface Props {
    name: String
  }
  const props = defineProps<Props>()
  const iconComponent = computed(() => {
    return defineAsyncComponent(() => (
      import(`./${props.name}/index.vue`)
    ))
  })

</script>

<style scoped></style>
