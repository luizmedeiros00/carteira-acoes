import Api from '../Api'
import HttpClient from '../HttpClient'
import FixedIncome from '../../interfaces/FixedIncome'

export default class FixedIncomeHttpService implements Api<FixedIncome> {
  constructor(readonly url: string) {}

  async get(): Promise<FixedIncome[]> {
    const response = await HttpClient.get(`/${this.url}`)
    return response.data
  }

  async post(data: any): Promise<Array<any>> {
    const response = await HttpClient.post(`/${this.url}`, data)

    return response.data
  }
}
