<template>
  <Pie
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script lang="ts" setup>
  import { Pie } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

  interface Props {
    chartId?: string
    datasetIdKey?: string
    width?: number
    height?: number
    cssClasses?: string
    styles?: object,
    chartData: ChartData
  }

  interface ChartData {
    labels: Array<string>,
    datasets: DataSets[]
  }

  interface DataSets {
    backgroundColor: Array<string>
    data: Array<number>
  }

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

  const {
    chartId = 'bar-chart',
    datasetIdKey = 'label',
    width = 400,
    height = 400,
    cssClasses = '',
    styles = {},
    chartData
  } = defineProps<Props>()
  
  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  }
</script>
