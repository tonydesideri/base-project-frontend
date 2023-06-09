import { UserList } from '../../user/UserList'
import { Layout } from '../components/Layout'

export function UsersPage() {
  return (
    <Layout>
      <main>
        <h1>User List</h1>
        <UserList />
      </main>
    </Layout>
  )
}
