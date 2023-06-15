import { useFetchUsersAdapter } from 'src/main/adapters/fetchUsers.adapter'

export function UserList() {
  const { users, isFetchUsersLoading, isFetchUsersSuccess } =
    useFetchUsersAdapter()

  return (
    <fieldset>
      <legend>User List</legend>
      {isFetchUsersLoading && <div>Loading...</div>}
      {isFetchUsersSuccess && (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      )}
    </fieldset>
  )
}
