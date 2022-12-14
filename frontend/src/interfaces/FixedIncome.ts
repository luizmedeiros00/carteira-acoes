export default interface FixedIncome {
  name: string
  value: number
  current_price: string
  quantity: number
  initial_date: string
  final_date?: string
  category: {
    name: string
  }
  subcategory: {
    name: string
  }

}
