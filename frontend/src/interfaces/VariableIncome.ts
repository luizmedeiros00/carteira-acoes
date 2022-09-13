export default interface VariableIncome {
  name: string
  code: string
  acquisition_cost: string
  current_price: string
  quantity: number
  category: {
    name: string
  }
  subcategory: {
    name: string
  }

}
