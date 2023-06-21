import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes } from './main/routes';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
