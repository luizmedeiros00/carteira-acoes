<template>
  <main class="container mx-auto p-4">
    <div class="p-4">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 class="text-xl font-semibold leading-tight">Resumo da Carteira</h2>
      </div>
    </div>
    <ButtonComponent title="My button" />
    <div class="flex">
      <div class="flex flex-col gap-2 px-4 basis-1/2">
        <Card title="Classes">
          <div class="flex flex-row gap-6">
            <div class="basis-1/2 flex flex-col gap-2">
              <template v-for="stock in stocks" :key="stock.id">
                <CardStockComponent
                  :id="stock.id"
                  :name="stock.name"
                  :total_balance="stock.total_balance"
                  :percentage="stock.percentage"
                  :color="stock.color"
                />
              </template>
            </div>
            <div class="flex justify-center w-full">
              <PieChart :width="200" :height="200" :chartData="chartDataStocks" />
            </div>
          </div>
        </Card>
        <Card title="Instituições">
          <div class="flex flex-row gap-6">
            <div class="basis-1/2 flex flex-col gap-2">
              <template v-for="institution in institutions" :key="institution.id">
                <CardStockComponent
                  :id="institution.id"
                  :name="institution.name"
                  :total_balance="institution.total_balance"
                  :percentage="institution.percentage"
                  :color="institution.color"
                />
              </template>
            </div>
            <div class="flex justify-center w-full">
              <PieChart :width="200" :height="200" :chartData="chartDataInstitutions" />
            </div>
          </div>
        </Card>
      </div>
      <div class="flex flex-col basis-1/2">
        <Card title="Produtos">
          <div
            class="flex flex-col w-full h-full flex max-h-screen overflow-y-auto overflow-hidden"
          >
            <template v-for="n in 14">
              <CardProductComponentVue
                stock_name="IVVB11"
                institution_name="Inter"
                total_balance="R$ 1.000,00"
                profitability="-2,27"
                percentage="30,07"
              />
            </template>
          </div>
        </Card>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { StocksClass } from '../../interfaces/StocksClass'
  import buildChartDataPie from '../../utils/ChartDataPieFactory'
  import PieChart from '@/components/Chart/PieChart.vue'
  import Card from '@/components/Card/index.vue'
  import CardStockComponent from './CardStockComponent.vue'
  import CardProductComponentVue from './CardProductComponent.vue'
  import ButtonComponent from '../../components/Button/Button'

  const institutions: StocksClass[] = [
    {
      id: 1,
      name: 'Banco inter',
      total_balance: 'R$ 20.843,89',
      percentage: '69.54',
      color: '#fb923c',
    },
    {
      id: 2,
      name: 'WARREN CTVM',
      total_balance: 'R$ 9.135,28',
      percentage: '30,47',
      color: '#b91c1c',
    },
  ]

  const stocks: StocksClass[] = [
    {
      id: 1,
      name: 'Fundo Imobiliário',
      total_balance: 'R$ 9.327,88',
      percentage: '30.67',
      color: '#38bdf8',
    },
    {
      id: 2,
      name: 'Ações Brasil',
      total_balance: 'R$ 9.209,07',
      percentage: '30.28',
      color: '#22c55e',
    },
    {
      id: 3,
      name: 'Ações EUA',
      total_balance: 'R$ 8.949,38',
      percentage: '29.42',
      color: '#ef4444',
    },
    {
      id: 4,
      name: 'Renda Fixa',
      total_balance: 'R$ 2.930,51',
      percentage: '9.63',
      color: '#fde047',
    },
  ]

  const chartDataStocks = buildChartDataPie(stocks)
  const chartDataInstitutions = buildChartDataPie(institutions)
</script>

<style scoped></style>
