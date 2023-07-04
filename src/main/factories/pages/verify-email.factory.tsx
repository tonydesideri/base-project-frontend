import { useIsAuthenticatedContext } from 'src/main/contexts/isAuthenticated.context';
import VerifyEmailPage from 'src/presentation/ui/pages/verify-email';

export default function VerifyEmailPageFectory() {
  const { user } = useIsAuthenticatedContext();

  if (user && user.isVerifiedEmail) {
    window.location.href = '/home';
  }

  return <VerifyEmailPage user={user} />;
}
