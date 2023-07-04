export interface IUserWithoutPassword {
  id: number;
  name: string;
  email: string;
  createdate: string;
  updateddate: string;
  lastLogin: string | null;
  isVerifiedEmail: boolean;
}

export interface UserM extends IUserWithoutPassword {
  password?: string;
}
