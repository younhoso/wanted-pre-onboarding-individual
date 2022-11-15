import { useQuery } from '@tanstack/react-query';
import { apis } from 'src/api/decemberAxios';
import styled from 'styled-components';
import Table from './Table';

type userType = {
  id: number,
  uuid: string,
  photo: string,
  name: string,
  email: string,
  age: number,
  gender_origin: number,
  birth_date: string,
  phone_number: string,
  address: string,
  detail_address: string,
  last_login: string,
  created_at: string,
  updated_at: string
};
type userSettingType = {
  id: number,
  uuid: string,
  allow_marketing_push: boolean,
  allow_invest_push: boolean,
  is_active: boolean,
  is_staff: boolean,
  created_at: string,
  updated_at: string
}

function UserList() {
  const { data: users } = useQuery(['users'], apis.usersGet);
  const { data: userSetting } = useQuery(['userSetting'], apis.userSettingGet);
  const newUserSetting = userSetting?.data.reduce((el : userSettingType, idx: number) => {
   
  },[]);
  console.log(newUserSetting)

  return(
      <UserWraper className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              고객명
            </th>
            <th scope="col" className="py-3 px-6">
              보유중인 계좌수
            </th>
            <th scope="col" className="py-3 px-6">
              이메일 주소
            </th>
            <th scope="col" className="py-3 px-6">
              성별
            </th>
            <th scope="col" className="py-3 px-6">
              생년월일
            </th>
            <th scope="col" className="py-3 px-6">
              휴대폰 번호
            </th>
            <th scope="col" className="py-3 px-6">
              최근로그인
            </th>
            <th scope="col" className="py-3 px-6">
              혜택 수신 동의 여부
            </th>
            <th scope="col" className="py-3 px-6">
              활성화 여부
            </th>
            <th scope="col" className="py-3 px-6">
              가입일
            </th>
          </tr>
        </thead>
        {
          users?.data?.map((el: userType, indx: number) => (
            <Table
              key={indx}
              id={el.id}
              photo={el.photo}
              name={el.name}
              email={el.email}
              age={el.age}
              gender_origin={el.gender_origin}
              birth_date={el.birth_date}
              phone_number={el.phone_number}
              address={el.address}
              detail_address={el.detail_address}
              last_login={el.last_login}
              created_at={el.created_at}
              updated_at={el.updated_at}
            />
          ))
        }
      </table>
    </UserWraper>
  )
}

const UserWraper = styled.div`
  padding: 20px 30px;
  min-height: 790px;
  border-bottom: 1px solid #e6e6e6;
  thead {
    background-color: #e6e6e6;
  }
`;

export default UserList;
