import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useIsAuthenticatedContext } from 'src/main/contexts/isAuthenticated.context';

interface PublicRouteProps {
  children: ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { isUser, isLoading } = useIsAuthenticatedContext();

  if (isUser && !isLoading) {
    return <Navigate to="/home" replace />;
  }

  return children;
}
