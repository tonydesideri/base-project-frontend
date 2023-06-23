import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetPasswordAdapter } from 'src/main/adapters/auth/resetPassword.adapter';

interface ResetPasswordPageProps {
  email: string;
  token: string;
}

export default function ResetPasswordPage({
  email,
  token
}: ResetPasswordPageProps) {
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  const { resetPassword, isSuccess } = useResetPasswordAdapter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // const email = searchParams.get('email');
    // const token = searchParams.get('token');
    await resetPassword({
      password,
      email,
      token
    });
  };

  return (
    <div>
      <h2>Redefinir senha</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Redefinir senha</button>
      </form>
      {isSuccess && (
        <>
          <p>Parabéns, você redefiniu sua senha</p>
          <a
            href="#"
            style={{ marginTop: '40px' }}
            onClick={() => {
              navigate('/');
            }}
          >
            login
          </a>
        </>
      )}
    </div>
  );
}
