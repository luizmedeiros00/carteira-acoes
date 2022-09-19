export default interface InvestmentFundsType {
  id: number
  stock_class: {
    id: number
    name: string
  }
  name: string
  cnpj: number
  value: number
  created_at: Date
}