import { useState } from 'react';
import { useCreateUserAdapter } from 'src/main/adapters/createUser.adapter';
import { Layout } from '../../components/Layout';
import { UserList } from './components/UserList';

export default function UsersPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userCreate } = useCreateUserAdapter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await userCreate({
      email,
      password,
      createdate: '',
      id: 1,
      updateddate: '',
      lastLogin: ''
    });
    // Lógica adicional após a autenticação (por exemplo, redirecionar para uma página)
  };
  return (
    <Layout>
      <main>
        <h1>User List</h1>
        <UserList />
      </main>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  );
}
