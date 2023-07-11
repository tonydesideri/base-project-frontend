import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashScreen from 'src/presentation/components/splash-screen';
import { IsAuthenticatedProvider } from '../contexts/isAuthenticated.context';
import { PrivateRoute } from './private/PrivateRoute';
import { PublicRoute } from './public/PublicRoute';

const UserListPage = lazy(() => import('src/presentation/ui/pages/user'));
const SignInPage = lazy(() => import('src/presentation/ui/pages/sign-in'));
const SignUpPage = lazy(() => import('src/presentation/ui/pages/sign-up'));
const VerifyEmailPageFactory = lazy(
  () => import('src/main/factories/pages/verify-email.factory')
);
const ResetPasswordPageFectory = lazy(
  () => import('src/main/factories/pages/reset-password.factory')
);
const ForgotPasswordPage = lazy(
  () => import('src/presentation/ui/pages/forgot-password')
);
const EmailConfirmationPageFactory = lazy(
  () => import('src/main/factories/pages/email-confirmation.factory')
);

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
              path="/verify-email"
              element={
                <PrivateRoute>
                  <VerifyEmailPageFactory />
                </PrivateRoute>
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
              path="/email-confirmation"
              element={<EmailConfirmationPageFactory />}
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
