import Api from '../Api'
import HttpClient from '../HttpClient'
import VariableIncome from '../../interfaces/VariableIncome'

export default class VariableIncomeHttpService implements Api {
  constructor(readonly httpClient: HttpClient, readonly url: string) {}

  async get(): Promise<VariableIncome[]> {
    const response = await this.httpClient.get(`/${this.url}`)
    return response as VariableIncome[]
  }

  async post(data: any): Promise<Array<any>> {
    const response = await this.httpClient.post(`/${this.url}`, data)

    return response.data
  }
}
