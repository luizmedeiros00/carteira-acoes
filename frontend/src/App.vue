<template>
  <div class="min-h-screen text-gray-900 bg-gray-100">
    <Sidebar />
    <div
    style="transition-property: margin; transition-duration: 150ms"
    class="min-h-screen flex flex-col lg:ml-64"
    >
    <Header></Header>

      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from '@/layouts/Header/index.vue'
  import Sidebar from '@/layouts/Sidebar/index.vue'
</script>
