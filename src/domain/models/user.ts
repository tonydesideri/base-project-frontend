export interface UserM {
  id: number
  email: string
  password: string
  createdate: string
  updateddate: string
  lastLogin: string | null
}

export interface UserApiM {
  data: UserM[]
  isArray: boolean
  path: string
  duration: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}
