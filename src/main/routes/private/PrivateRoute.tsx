import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useIsAuthenticatedContext } from 'src/main/contexts/isAuthenticated.context';

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { isUser, isLoading, isSuccess } = useIsAuthenticatedContext();

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  if (!isUser && !isLoading) {
    return <Navigate to="/" replace />;
  }

  if (isSuccess) {
    return children;
  }
}
