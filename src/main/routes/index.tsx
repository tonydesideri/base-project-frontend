import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const LoginPage = lazy(() => import('src/presentation/ui/pages/login'));
const CreateAccountPage = lazy(
  () => import('src/presentation/ui/pages/createAccount')
);
const UserListPage = lazy(() => import('src/presentation/ui/pages/user'));

export function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />
    },
    {
      path: '/create-account',
      element: <CreateAccountPage />
    },
    {
      path: '/home',
      element: <UserListPage />
    }
  ]);

  return <RouterProvider router={router} />;
}
