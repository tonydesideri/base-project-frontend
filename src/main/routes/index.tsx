import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPasswordPage from 'src/presentation/ui/pages/forgot-password';
import ResetPasswordPage from 'src/presentation/ui/pages/reset-password';
import { IsAuthenticatedProvider } from '../contexts/isAuthenticated.context';
import { PrivateRoute } from './private/PrivateRoute';
import { PublicRoute } from './public/PublicRoute';

const UserListPage = lazy(() => import('src/presentation/ui/pages/user'));
const LoginPage = lazy(() => import('src/presentation/ui/pages/login'));
const CreateAccountPage = lazy(
  () => import('src/presentation/ui/pages/create-account')
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
              path="/forgot-password"
              element={
                <PublicRoute>
                  <ForgotPasswordPage />
                </PublicRoute>
              }
            />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
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
