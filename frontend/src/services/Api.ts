export default interface Api {
  get(): Promise<Array<any>>
  post(data: any): Promise<any>
}
