import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { IHTTPService } from '../../domain/services/http.interface'

interface HTTPRequestConfig extends AxiosRequestConfig {}

export class HttpService implements IHTTPService {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:3000/api_v1',
    })
  }

  async get<T>(url: string, config: HTTPRequestConfig = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get<T>(
      url,
      config,
    )
    return response.data
  }

  async delete<T>(url: string, config: HTTPRequestConfig = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete<T>(
      url,
      config,
    )
    return response.data
  }

  async put<T>(
    url: string,
    body: unknown,
    config: HTTPRequestConfig = {},
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put<T>(
      url,
      body,
      config,
    )
    return response.data
  }

  async patch<T>(
    url: string,
    body: unknown,
    config: HTTPRequestConfig = {},
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.patch<T>(
      url,
      body,
      config,
    )
    return response.data
  }

  async post<T>(
    url: string,
    body: unknown,
    config: HTTPRequestConfig = {},
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post<T>(
      url,
      body,
      config,
    )
    return response.data
  }
}
