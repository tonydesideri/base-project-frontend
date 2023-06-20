import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes } from './main/routes';
import { UseCasesProxyProvider } from './main/usecases-proxy/usecases-proxy';

const queryClient = new QueryClient();

export function App() {
  return (
    <UseCasesProxyProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </UseCasesProxyProvider>
  );
}
