import Api from '../Api'
import httpCliente from '../HttpClient'
import InvestmentFundsType from '../../interfaces/InvestmentFundsType'

export default class InvestmentFundsHttpService implements Api<InvestmentFundsType> {
  constructor(readonly url: string) {}

  async get(): Promise<InvestmentFundsType[]> {
    const response = await httpCliente.get(`/${this.url}`)
    return response.data
  }

  async post(data: any): Promise<Array<any>> {
    const response = await httpCliente.post(`/${this.url}`, data)

    return response.data
  }
}
