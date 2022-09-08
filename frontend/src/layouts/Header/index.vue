<template>
  <!-- <header
    
  >
  
  </header> -->
  <div
    class="sticky top-0 z-10 px-6 py-2 bg-white flex items-center justify-between transition-transform duration-500 dark:bg-dark-eval-1"
  >
    <div class="w-28 lg:w-36">
      <!-- <img class="w-full" alt="logo"> -->
    </div>

    <div class="flex">
      <ul class="flex list-none">
        <li
          @click="() => {}"
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
        >
          Credenciais
        </li>
        <li
          @click="() => {}"
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
        >
          Feedbacks
        </li>
        <li
          id="logout-button"
          class="px-6 py-2 font-bold bg-white rounded-full cursor-pointer text-brand-main focus:outline-none"
        >
          Sair
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
