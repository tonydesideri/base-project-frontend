export interface IApiResponse<T> {
  data: T
  isArray: boolean
  path: string
  duration: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}

export interface IApiResponseError {
  statusCode: number;
  timestamp: string;
  path: string;
  message: string[];
}