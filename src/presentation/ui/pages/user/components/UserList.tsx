import { useIsAuthenticatedContext } from 'src/main/contexts/isAuthenticated.context';

export function UserList() {
  const { user } = useIsAuthenticatedContext();

  return (
    <fieldset>
      <legend>User Info</legend>
      {!!user && <p>{user.email}</p>}
    </fieldset>
  );
}
