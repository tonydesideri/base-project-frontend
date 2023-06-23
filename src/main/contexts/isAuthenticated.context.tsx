import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';
import { AuthWithoutPasswordM } from 'src/domain/models/auth';
import { useIsAuthenticatedAdapter } from '../adapters/auth/isAuthenticated.adapter';

interface IsAuthenticatedProviderProps {
  children: ReactNode;
}

interface IsAuthenticatedContextProps {
  user: AuthWithoutPasswordM | undefined;
  isUser: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export const IsAuthenticatedContext =
  createContext<IsAuthenticatedContextProps>({} as IsAuthenticatedContextProps);

export function IsAuthenticatedProvider({
  children
}: IsAuthenticatedProviderProps) {
  const [user, setUser] = useState<AuthWithoutPasswordM | undefined>(undefined);

  const { isAuthenticated, isAuthenticatedLoading, isAuthenticatedSuccess } =
    useIsAuthenticatedAdapter(!!user);

  useEffect(() => {
    if (!isAuthenticatedLoading) {
      setUser(isAuthenticated);
    }
  }, []);

  return (
    <IsAuthenticatedContext.Provider
      value={{
        user: user || isAuthenticated,
        isUser: !!user || !!isAuthenticated,
        isLoading: isAuthenticatedLoading,
        isSuccess: isAuthenticatedSuccess
      }}
    >
      {children}
    </IsAuthenticatedContext.Provider>
  );
}

export function useIsAuthenticatedContext() {
  const context = useContext(IsAuthenticatedContext);
  return context;
}
