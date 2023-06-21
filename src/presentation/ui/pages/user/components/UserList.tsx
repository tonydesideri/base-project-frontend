import { useFetchUsersAdapter } from 'src/main/adapters/user/fetchUsers.adapter';

export function UserList() {
  const { users, isFetchUsersLoading, isFetchUsersSuccess } =
    useFetchUsersAdapter();

  return (
    <fieldset>
      <legend>User Info</legend>
      {isFetchUsersLoading && <div>Loading...</div>}
      {isFetchUsersSuccess && (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      )}
    </fieldset>
  );
}
