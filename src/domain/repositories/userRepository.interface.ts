import { UserApiM, UserM } from '../models/user'

export interface IUserRepository {
  getUsers(): Promise<UserM[]>
  createUser(
    user: Omit<UserM, 'id' | 'createdate' | 'updateddate' | 'lastLogin'>,
  ): Promise<UserApiM>
}
