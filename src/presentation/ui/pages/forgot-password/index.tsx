import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForgotPasswordAdapter } from 'src/main/adapters/auth/forgotPassword.adapter';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const { forgotPassword, isSuccess } = useForgotPasswordAdapter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await forgotPassword({
      email
    });
  };

  return (
    <div>
      <h2>Redefinir senha</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Solicitar nova senha</button>
      </form>
      {isSuccess && (
        <p>Instruções para redefinição de senha enviadas por email</p>
      )}
      <a
        href="#"
        style={{ marginTop: '40px' }}
        onClick={() => {
          navigate('/');
        }}
      >
        login
      </a>
    </div>
  );
}
