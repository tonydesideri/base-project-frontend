import { useState } from 'react';
import { useSignInAdapter } from 'src/main/adapters/auth/signin.adapter';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signin } = useSignInAdapter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signin({
      email,
      password
    });
  };

  return (
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
      <a href="/create-account" style={{ marginTop: '40px' }}>
        Criar conta
      </a>
    </div>
  );
}
