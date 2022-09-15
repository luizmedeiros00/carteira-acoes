export default interface Api<ResponseType> {
  get(): Promise<ResponseType[]>
  post<T>(data: T): Promise<any>
}

