import { createContext, JSX, useContext } from 'react'
import { TodoDataSource } from '../dataSources/todo.datasource'
import { UserDataSource } from '../dataSources/user.datasource'

const SERVICES = {
  todoRepository: new TodoDataSource(),
  userRepository: new UserDataSource(),
}

const UseCasesProxy = createContext<typeof SERVICES | undefined>(undefined)

const UseCasesProxyProvider = ({ children }: { children: JSX.Element }) => (
  <UseCasesProxy.Provider value={SERVICES}>{children}</UseCasesProxy.Provider>
)

const useCasesProxy = () => {
  const ctx = useContext(UseCasesProxy)

  if (!ctx)
    throw new Error(
      "It's seems you've tryied to use useAppServices hook outside <UseCasesProxyProvider />",
    )

  return ctx
}

export { useCasesProxy, UseCasesProxyProvider }
