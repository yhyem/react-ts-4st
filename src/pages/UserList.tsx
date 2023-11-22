import useSWR from "swr";
import { GetUsersPayload } from "../payload";
import Card from "../components/Card";
import { styled } from "styled-components";
import BigLion from "../assets/BigLion.svg";

export const UserList = () => {
  const { data, isLoading } = useSWR<GetUsersPayload>("/api/users");

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <UserListBlockWrapper>
      <UserListBlock>
        <img src={BigLion} alt="logo_lion" />

        <UserListWrapper>
          {data?.data.users.map((user: any) => (
            <Card key={user.email} title={user.email} content={user.username} />
          ))}
        </UserListWrapper>
      </UserListBlock>
    </UserListBlockWrapper>
  );
};

const UserListBlockWrapper = styled.div`
  display: flex;
  padding-top: 60px;
  flex-direction: column;
  align-items: center;
`;

const UserListBlock = styled.div`
  display: flex;
  min-width: 320px;
  max-width: 1200px;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

const UserListWrapper = styled.div`
  display: flex;
  min-width: 320px;
  max-width: 1200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
  align-self: stretch;
`;
