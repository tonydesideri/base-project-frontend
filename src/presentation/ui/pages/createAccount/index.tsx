import { useState } from 'react';
import { useCreateAccountAdapter } from 'src/main/adapters/user/createAccount.adapter';

export default function CreateAccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { createAccount } = useCreateAccountAdapter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createAccount({
      email,
      password
    });
  };

  return (
    <div>
      <h2>Criar conta</h2>
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
      <a href="/" style={{ marginTop: '40px' }}>
        login
      </a>
    </div>
  );
}
