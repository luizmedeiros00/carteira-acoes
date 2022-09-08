import { StocksClass } from '../interfaces/StocksClass'

const buildChartDataPie = (stocks: StocksClass[]): object => {
  let labels: Array<string> = []
  let datasets: Array<any> = []
  let backgroundColor: Array<string> = []
  let data: Array<number> = []

  stocks.forEach((stock) => {
    labels.push(stock.name)
    backgroundColor.push(stock.color)
    data.push(parseFloat(stock.percentage))
  })

  datasets.push({
    backgroundColor,
    data,
  })

  return {
    labels,
    datasets,
  }
}

export default buildChartDataPie