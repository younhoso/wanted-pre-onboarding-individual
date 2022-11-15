import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { apis } from 'src/api/decemberAxios';
import styled from 'styled-components';

function UserList() {
  const { data: users } = useQuery(['users'], apis.usersGet);

  return <UserWraper>UserList</UserWraper>;
}

const UserWraper = styled.div`
  padding: 20px 30px;
  border-bottom: 1px solid #e6e6e6;
`;

export default UserList;
