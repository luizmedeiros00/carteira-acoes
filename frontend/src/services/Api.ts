import VariableIncome from '../interfaces/VariableIncome'

export default interface Api {
  get(): Promise<VariableIncome[]>
  post(data: any): Promise<any>
}
