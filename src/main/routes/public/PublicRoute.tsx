import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useIsAuthenticatedContext } from 'src/main/contexts/isAuthenticated.context';

interface PublicRouteProps {
  children: ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { isUser, isLoading, isSuccess } = useIsAuthenticatedContext();

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  if (isUser && !isLoading) {
    return <Navigate to="/home" replace />;
  }

  if (!isSuccess) {
    return children;
  }
}
