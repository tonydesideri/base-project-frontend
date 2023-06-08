import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodosPage } from "./infrastructure/Presentation/UI/Pages/TodosPage";
import { UsersPage } from "./infrastructure/Presentation/UI/Pages/UsersPage";
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UseCasesProxyProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </UseCasesProxyProvider>
  </React.StrictMode>
);
