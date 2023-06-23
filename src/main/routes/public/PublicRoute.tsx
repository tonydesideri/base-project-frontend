import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useIsAuthenticatedContext } from 'src/main/contexts/isAuthenticated.context';
import SplashScreen from 'src/presentation/components/splash-screen';

interface PublicRouteProps {
  children: ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { isUser, isLoading, isSuccess } = useIsAuthenticatedContext();

  if (isLoading) {
    return <SplashScreen />
  }

  if (isUser && !isLoading) {
    return <Navigate to="/home" replace />;
  }

  if (!isSuccess) {
    return children;
  }
}
