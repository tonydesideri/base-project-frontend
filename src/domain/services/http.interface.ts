export interface IApiResponse<T> {
  data: T
  isArray: boolean
  path: string
  duration: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}

export interface IHTTPService<RequestConfig = any> {
  get<T>(url: string, config?: RequestConfig): Promise<IApiResponse<T>>
  delete<T>(url: string, config?: RequestConfig): Promise<IApiResponse<T>>
  put<T>(url: string, body: unknown, config?: RequestConfig): Promise<IApiResponse<T>>
  patch<T>(url: string, body: unknown, config?: RequestConfig): Promise<IApiResponse<T>>
  post<T>(url: string, body: unknown, config?: RequestConfig): Promise<IApiResponse<T>>
}
