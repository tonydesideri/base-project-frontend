import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface HTTPRequestConfig extends AxiosRequestConfig {}

export class HttpService implements HttpService {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:3000/api_v1',
    })
  }

  async get<T>(url: string, config: HTTPRequestConfig = {}): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await this.axiosInstance.get<T>(
      url,
      config,
    )
    return response
  }

  async delete<T>(url: string, config: HTTPRequestConfig = {}): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete<T>(
      url,
      config,
    )
    return response
  }

  async put<T>(
    url: string,
    body: unknown,
    config: HTTPRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await this.axiosInstance.put<T>(
      url,
      body,
      config,
    )
    return response
  }

  async patch<T>(
    url: string,
    body: unknown,
    config: HTTPRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await this.axiosInstance.patch<T>(
      url,
      body,
      config,
    )
    return response
  }

  async post<T>(
    url: string,
    body: unknown,
    config: HTTPRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await this.axiosInstance.post<T>(
      url,
      body,
      config,
    )
    return response
  }
}
