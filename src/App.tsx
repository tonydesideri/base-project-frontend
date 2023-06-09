import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UseCasesProxyProvider } from './infrastructure/usecases-proxy/usecases-proxy'
import { Routes } from './main/routes'

const queryClient = new QueryClient()

export function App() {
  return (
    <UseCasesProxyProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </UseCasesProxyProvider>
  )
}
