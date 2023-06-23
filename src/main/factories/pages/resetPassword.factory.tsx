import { useSearchParams } from 'react-router-dom';
import ResetPasswordPage from 'src/presentation/ui/pages/reset-password';

export default function ResetPasswordPageFectory() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  if (email && token) {
    return <ResetPasswordPage email={email} token={token} />;
  }

  return <h1>Página não encontrada</h1>;
}
