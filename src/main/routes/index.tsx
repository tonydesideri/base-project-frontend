import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const TodosPage = lazy(() => import('src/presentation/ui/pages/todo'))
const UsersPage = lazy(() => import('src/presentation/ui/pages/user'))

export function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <UsersPage />,
    },
    {
      path: '/todos',
      element: <TodosPage />,
    },
  ])

  return <RouterProvider router={router} />
}
