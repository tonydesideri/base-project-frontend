import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import { TIsAuthenticatedUseCase } from 'src/domain/usecases/auth/isAuthenticated.interface';
import { useIsAuthenticatedAdapter } from '../adapters/auth/isAuthenticated.adapter';

interface IsAuthenticatedProviderProps {
  children: ReactNode;
}

interface IsAuthenticatedContextProps {
  user: TIsAuthenticatedUseCase.Model | undefined;
  isUser: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export const IsAuthenticatedContext =
  createContext<IsAuthenticatedContextProps>({} as IsAuthenticatedContextProps);

export function IsAuthenticatedProvider({
  children
}: IsAuthenticatedProviderProps) {
  const [user, setUser] = useState<TIsAuthenticatedUseCase.Model | undefined>(
    undefined
  );

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
