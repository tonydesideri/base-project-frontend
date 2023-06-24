import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useIsAuthenticatedContext } from 'src/main/contexts/isAuthenticated.context';
import SplashScreen from 'src/presentation/ui/components/splash-screen';

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { isUser, isLoading, isSuccess } = useIsAuthenticatedContext();

  if (isLoading) {
    return <SplashScreen />;
  }

  if (!isUser && !isLoading) {
    return <Navigate to="/" replace />;
  }

  if (isSuccess) {
    return children;
  }
}
