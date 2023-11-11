interface User {
  id: string;
  email: string;
  username: string;
}

export interface GetUsersPayload {
  data: {
    users: User[];
  };
}
