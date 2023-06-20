export interface IUserWithoutPassword {
  id: number;
  email: string;
  createdate: string;
  updateddate: string;
  lastLogin: string | null;
}

export interface UserM extends IUserWithoutPassword {
  password?: string;
}
