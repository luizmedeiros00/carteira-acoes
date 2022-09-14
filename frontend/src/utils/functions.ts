export function money(value: number | string | null) {
  if (!value) return ''
  return `R$ ${value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

export function profitability(fullValue: number, partialValue: number): string {
  const profitability = (100 * partialValue) / fullValue
  return profitability.toFixed(2)
}
