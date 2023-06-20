import { createContext, JSX, useContext } from 'react';
import { useFetchUsersAdapter } from '../adapters/fetchUsers.adapter';

const SERVICES = {
  useFetchUser: useFetchUsersAdapter
};

const UseCasesProxy = createContext<typeof SERVICES | undefined>(undefined);

const UseCasesProxyProvider = ({ children }: { children: JSX.Element }) => (
  <UseCasesProxy.Provider value={SERVICES}>{children}</UseCasesProxy.Provider>
);

const useCasesProxy = () => {
  const ctx = useContext(UseCasesProxy);

  if (!ctx)
    throw new Error(
      "It's seems you've tryied to use useAppServices hook outside <UseCasesProxyProvider />"
    );

  return ctx;
};

export { useCasesProxy, UseCasesProxyProvider };
