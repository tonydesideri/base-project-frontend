export interface IHTTPService<RequestConfig = any> {
  get<T>(url: string, config?: RequestConfig): Promise<T>
  delete<T>(url: string, config?: RequestConfig): Promise<T>
  put<T>(url: string, body: unknown, config?: RequestConfig): Promise<T>
  patch<T>(url: string, body: unknown, config?: RequestConfig): Promise<T>
  post<T>(url: string, body: unknown, config?: RequestConfig): Promise<T>
}
