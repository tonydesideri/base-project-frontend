import { useSearchParams } from 'react-router-dom';
import { EmailConfirmationPage } from 'src/presentation/ui/pages/email-confirmation';

export default function EmailConfirmationPageFectory() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  if (!email || !token) {
    // TODO: Criar componente de página não encontrada
    return <h1>Página não encontrada</h1>;
  }

  const decodeEmail = decodeURIComponent(email);
  const decodeToken = decodeURIComponent(token);

  return <EmailConfirmationPage email={decodeEmail} token={decodeToken} />;
}
