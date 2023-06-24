import { QueryClient, QueryClientProvider } from 'react-query';
import { Router } from './routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
      // refetchOnMount: false,
      // refetchOnReconnect: false
    }
  }
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
