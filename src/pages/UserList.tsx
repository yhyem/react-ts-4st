import useSWR from "swr";
import { GetUsersPayload } from "../payload";

export const UserList = () => {
  const { data, isLoading } = useSWR<GetUsersPayload>("/api/users");

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, margin: "4px 0" }}>
      {data?.data.users.map((user: any) => (
        <div
          key={user.email}
          style={{ border: "1px solid black", borderRadius: 4, padding: "2px 4px" }}
        >
          <div>{user.email}</div>
          <div>{user.username}</div>
        </div>
      ))}
    </div>
  );
};
