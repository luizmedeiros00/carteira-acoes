<template>
  <main class="container mx-auto py-4 px-4">
    <div class="py-4">
      <div class="flex gap-4 justify-between content-center">
        <h2 class="text-xl font-semibold leading-tight">Produtos</h2>
        <button
          class="bg-blue-600 rounded-full p-3 text-white text-sm hover:bg-blue-500"
          @click="to"
        >
          Adicionar Produto
        </button>
      </div>
    </div>

    <div class="flex flex-col">
      <Card>
        <nav class="border-b text-sm flex justify-start">
          <router-link
            class="inline-block px-4 py-2 text-gray-700 hover:text-black"
            :class="{
              active: currentRoute === 'Renda Variável',
            }"
            :to="{ name: 'Renda Variável' }"
            >Renda Variável</router-link
          >
          <router-link
            class="inline-block px-4 py-2 text-gray-700 hover:text-black"
            :class="{
              active: currentRoute === 'Renda Fixa',
            }"
            :to="{ name: 'Renda Fixa' }"
            >Renda Fixa</router-link
          >
          <router-link
            class="inline-block px-4 py-2 text-gray-700 hover:text-black"
            :class="{
              active: currentRoute === 'Fundos de Investimento',
            }"
            :to="{ name: 'Fundos de Investimento' }"
            >Fundos de Investimento</router-link
          >
        </nav>
        <router-view></router-view>
      </Card>
    </div>
  </main>
</template>

<script setup lang="ts">
  import Card from '@/components/Card/index.vue'
  import { computed, ComputedRef } from 'vue'
  import { useRoute, RouterLink } from 'vue-router'

  const route = useRoute()

  const currentRoute: ComputedRef<string> = computed<string>(() => route.name)

  function to() {
    console.log('aqui')
  }
</script>

<style scoped lang="postcss">
  .active {
    @apply border-b-2 border-blue-600 text-blue-600 font-semibold;
  }
</style>
