<template>
  <div class="w-full p-3 border-b-2">
    <div class="flex flex-col text-slate-500">
      <div class="flex flex-col pl-2 border-l-4">
        <h6 class="font-semibold text-[10px] uppercase">{{props.institution_name}}</h6>
        <h6 class="font-medium text-[14px] uppercase">{{props.stock_name}}</h6>
      </div>
      <div class="flex ml-2 mb-2">
        <div class="basis-1/2">
          <span>
            <label class="font-semibold text-[10px] tracking-[0.4px] uppercase">
              Saldo Atual
            </label>
            <p class="font-bold text-[14px]">{{props.total_balance}}</p>
          </span>
        </div>
        <div class="basis-1/4">
          <span>
            <label class="font-semibold text-[10px] tracking-[0.4px] uppercase"> Rent % </label>
            <p class="font-bold text-[14px]">{{props.profitability}}</p>
          </span>
        </div>
        <div class="basis-1/4">
          <span>
            <label class="font-semibold text-[10px] tracking-[0.4px] uppercase"> % Carteira </label>
            <p class="font-bold text-[14px]">{{props.percentage}}</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  institution_name: string,
  stock_name: string,
  total_balance: string,
  percentage: string,
  profitability: string
}

const props = defineProps<Props>()
</script>

<style scoped></style>
