import { AxiosResponse } from 'axios';
// Verificar como remover essa importação daqui

export interface IHttpService<RequestConfig = any> {
  get<T>(url: string, config?: RequestConfig): Promise<AxiosResponse<T>>;
  delete<T>(url: string, config?: RequestConfig): Promise<AxiosResponse<T>>;
  put<T>(
    url: string,
    body: unknown,
    config?: RequestConfig
  ): Promise<AxiosResponse<T>>;
  patch<T>(
    url: string,
    body: unknown,
    config?: RequestConfig
  ): Promise<AxiosResponse<T>>;
  post<T>(
    url: string,
    body: unknown,
    config?: RequestConfig
  ): Promise<AxiosResponse<T>>;
}

export interface IHttpErrorHandlingInterceptor<T = any> {
  onError(error: T): Promise<any>;
}
