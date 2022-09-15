import Api from '../Api'
import httpCliente from '../HttpClient'
import VariableIncome from '../../interfaces/VariableIncome'

export default class VariableIncomeHttpService implements Api<VariableIncome> {
  constructor(readonly url: string) {}

  async get(): Promise<VariableIncome[]> {
    const response = await httpCliente.get(`/${this.url}`)
    return response.data
  }

  async post(data: any): Promise<Array<any>> {
    const response = await httpCliente.post(`/${this.url}`, data)

    return response.data
  }
}
