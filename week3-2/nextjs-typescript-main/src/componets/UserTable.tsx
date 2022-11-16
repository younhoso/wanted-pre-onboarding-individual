import { useRouter } from 'next/router';
import { UsersType } from 'src/types';
import styled from 'styled-components';

const brokerDB = {
  '209': '유안타증권',
  '218': '현대증권',
  '230': '미래에셋증권',
  '238': '대우증권',
  '240': '삼성증권',
  '243': '한국투자증권',
  '247': '우리투자증권',
  '261': '교보증권',
  '262': '하이투자증권',
  '263': 'HMC투자증권',
  '264': '키움증권',
  '265': '이베스트투자증권',
  '266': 'SK증권',
  '267': '대신증권',
  '268': '아이엠투자증권',
  '269': '한화투자증권',
  '270': '하나대투자증권',
  '279': '동부증권',
  '280': '유진투자증권',
  '288': '카카오페이증권',
  '287': '메리츠종합금융증권',
  '290': '부국증권',
  '291': '신영증권',
  '292': 'LIG투자증권',
  '271': '토스증권',
};

function UserTable({
  id,
  uuid,
  photo,
  name,
  age,
  email,
  gender_origin,
  birth_date,
  phone_number,
  address,
  detail_address,
  last_login,
  created_at,
  updated_at,
}: UsersType) {
  const router = useRouter();
  const newBrokerDB = Object.entries<string>(brokerDB);

  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {name}
        </th>
        <td className="py-4 px-6">{}</td>
        <td className="py-4 px-6">{email}</td>
        <td className="py-4 px-6">{}</td>
        <td className="py-4 px-6">{birth_date}</td>
        <td className="py-4 px-6">{phone_number}</td>
        <td className="py-4 px-6">{last_login}</td>
        <td className="py-4 px-6">{}</td>
        <td className="py-4 px-6">{}</td>
        <td className="py-4 px-6">{created_at}</td>
      </tr>
    </tbody>
  );
}

const TableWraper = styled.tbody``;

export default UserTable;
