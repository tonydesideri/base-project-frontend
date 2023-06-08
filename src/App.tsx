import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodosPage } from "./infrastructure/presentation/ui/pages/TodosPage";
import { UsersPage } from "./infrastructure/presentation/ui/pages/UsersPage";
import { UseCasesProxyProvider } from "./infrastructure/usecases-proxy/usecases-proxy";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage />,
  },
  {
    path: "/todos",
    element: <TodosPage />,
  },
]);

export function App() {
  return (
    <UseCasesProxyProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </UseCasesProxyProvider>
  )
}