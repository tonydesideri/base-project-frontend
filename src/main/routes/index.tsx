import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashScreen from 'src/presentation/components/splash-screen';
import ForgotPasswordPage from 'src/presentation/ui/pages/forgot-password';
import { IsAuthenticatedProvider } from '../contexts/isAuthenticated.context';
import ResetPasswordPageFectory from '../factories/pages/resetPassword.factory';
import { PrivateRoute } from './private/PrivateRoute';
import { PublicRoute } from './public/PublicRoute';

const UserListPage = lazy(() => import('src/presentation/ui/pages/user'));
const SignInPage = lazy(() => import('src/presentation/ui/pages/sign-in'));
const SignUpPage = lazy(() => import('src/presentation/ui/pages/sign-up'));

export function Router() {
  return (
    <IsAuthenticatedProvider>
      <BrowserRouter>
        <Suspense fallback={<SplashScreen />}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <SignInPage />
                </PublicRoute>
              }
            />
            <Route
              path="/sign-up"
              element={
                <PublicRoute>
                  <SignUpPage />
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
            <Route
              path="/reset-password"
              element={<ResetPasswordPageFectory />}
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
