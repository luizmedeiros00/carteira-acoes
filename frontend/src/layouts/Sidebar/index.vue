<template>
  <aside
    aria-label="Sidebar"
    class="fixed inset-y-0 z-20 py-4 flex flex-col space-y-6 bg-white shadow-lg dark:bg-dark-eval-1 translate-x-0 w-64"
  >
    <div class="text-xl">
      <div class="p-2.5 mt-1 flex justify-between">
        <h1 class="font-bold text-[15px] ml-3">Carteira</h1>
        <!-- <i class="bi bi-x cursor-pointer ml-28 lg:hidden" onclick="Close()"></i> -->
        <button class="text-md text-gray-600 focus:outline-none lg:hidden">&times;</button>
      </div>
    </div>
    <div class="relative flex flex-col flex-1 max-h-full gap-4 px-3">
      <SidebarLink
        title="Dashboard"
        :to="{ name: 'Resumo Carteira' }"
        :active="isCurrentRoute('Resumo Carteira')"
      >
        <template #icon>
          <vue-feather
            class="w-6 h-6 transition duration-75 hover:text-gray-500"
            type="layout"
          ></vue-feather>
        </template>
      </SidebarLink>
      <SidebarCollapsible title="Produtos" :active="isCurrentPath('/product')">
        <template #icon>
          <vue-feather
            class="w-6 h-6 transition duration-75 hover:text-gray-500"
            type="list"
          ></vue-feather>
        </template>
        <SidebarCollapsibleItem
          :to="{ name: 'Renda Variável' }"
          title="Renda Variável"
          :active="isCurrentRoute('Renda Variável')"
        />
        <SidebarCollapsibleItem
          :to="{ name: 'Renda Fixa' }"
          title="Renda Fixa"
          :active="isCurrentRoute('Renda Fixa')"
        />
        <SidebarCollapsibleItem
          :to="{ name: 'Fundos de Investimento' }"
          :active="isCurrentRoute('Fundos de Investimento')"
          title="Fundos de Investimento"
        />
      </SidebarCollapsible>
    </div>
  </aside>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import SidebarCollapsible from './SidebarCollapsible.vue'
  import SidebarCollapsibleItem from './SidebarCollapsibleItem.vue'
  import SidebarLink from './SidebarLink.vue'
  const route = useRoute()

  const isCurrentRoute = (routeName: string) => {
    return route.name == routeName
  }
  const isCurrentPath = (path: string) => {
    return route.path.startsWith(path)
  }
</script>

<style scoped lang="postcss">
  .active {
    @apply bg-blue-500 text-white hover:bg-blue-600 hover:text-white;
  }
</style>
