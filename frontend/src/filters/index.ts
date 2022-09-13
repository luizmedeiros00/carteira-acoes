import FiltersInterface from './FiltersInterface'
const filters: FiltersInterface = {
  money(value: string | number): string {
    return `R$ ${value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  },
}

export default filters
