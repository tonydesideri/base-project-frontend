export interface IApiResponse<T> {
  data: T
  isArray: boolean
  path: string
  duration: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}