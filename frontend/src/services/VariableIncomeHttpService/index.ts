import Api from '../Api'
import HttpClient from '../HttpClient'

export default class ItemHttpService implements Api {
  constructor(readonly httpClient: HttpClient, readonly url: string) {}

  async get(): Promise<Array<any>> {
    const response = await this.httpClient.get(`/${this.url}`)

    return response.data
  }

  async post(data: any): Promise<Array<any>> {
    const response = await this.httpClient.post(`/${this.url}`, data)

    return response.data
  }
}
