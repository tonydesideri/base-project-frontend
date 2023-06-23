export interface IAuthWithoutPassword {
  email: string;
}

export interface AuthM extends IAuthWithoutPassword {
  password: string;
}
