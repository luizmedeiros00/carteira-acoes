import HttpClient from './HttpClient'
import axios from 'axios'

export default class AxiosAdapter implements HttpClient {
  private http: any

  constructor() {
    this.http = axios.create({
      baseURL: 'http://localhost:8000',
    })
  }

  async get(url: string): Promise<any> {
    const response = await this.http.get(url)
    return response.data
  }

  async post(url: string, data: any): Promise<any> {
    const response = await this.http.post(url, data)
    return response.data
  }
}
