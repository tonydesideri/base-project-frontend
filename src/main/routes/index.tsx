import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const LoginPage = lazy(() => import('../../presentation/ui/pages/user'));
// const LoginPage = lazy(() => import('src/presentation/ui/pages/login'))

export function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />
    }
  ]);

  return <RouterProvider router={router} />;
}
