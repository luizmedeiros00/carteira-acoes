<template>
  <div class="relative w-full bg-blue-200 rounded-full h-1 mb-4 dark:bg-gray-700">
    <div class="w-full absolute top-0 h-1 rounded shim-blue"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .shim-blue {
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 155, 255, 0.7);
  }
  .shim-blue::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(233, 233, 233, 1) 0,
      rgba(233, 233, 233, 0.9) 50%,
      rgba(233, 233, 233, 0.8) 100%
    );
    animation: shimmer 1s ease-out infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(0%);
      opacity: 0;
    }
  }
</style>
