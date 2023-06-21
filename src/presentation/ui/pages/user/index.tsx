import { Layout } from '../../components/Layout';
import { UserList } from './components/UserList';

export default function UsersPage() {
  return (
    <Layout>
      <main>
        <h1>User List</h1>
        <UserList />
      </main>
    </Layout>
  );
}
