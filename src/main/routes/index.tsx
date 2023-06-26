import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IsAuthenticatedProvider } from '../contexts/isAuthenticated.context';
import { PrivateRoute } from './private/PrivateRoute';
import { PublicRoute } from './public/PublicRoute';

const UserListPage = lazy(() => import('src/presentation/ui/pages/user'));
const LoginPage = lazy(() => import('src/presentation/ui/pages/login'));
const CreateAccountPage = lazy(
  () => import('src/presentation/ui/pages/createAccount')
);

export function Router() {
  return (
    <IsAuthenticatedProvider>
      <BrowserRouter>
        <Suspense fallback={<h1>Carregando...</h1>}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/create-account"
              element={
                <PublicRoute>
                  <CreateAccountPage />
                </PublicRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <UserListPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </IsAuthenticatedProvider>
  );
}
