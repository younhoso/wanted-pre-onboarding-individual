import { useRouter } from 'next/router';
import styled from 'styled-components';

type TableType = {
  id?: number;
  user_id?: number;
  uuid?: string;
  photo?: string;
  broker_id?: string;
  status?: number;
  number?: string;
  name?: string;
  age?: number;
  email?: string;
  gender_origin?: number;
  birth_date?: string;
  phone_number?: string;
  address?: string;
  detail_address?: string;
  assets?: string;
  payments?: string;
  is_active?: boolean;
  last_login?: string;
  created_at?: string;
  updated_at?: string;
  accountStat?: {statusNum: number, status:string}[]
};

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

function Table({
  id,
  user_id,
  uuid,
  photo,
  broker_id,
  status,
  number,
  name,
  age,
  email,
  gender_origin,
  birth_date,
  phone_number,
  address,
  detail_address,
  assets,
  payments,
  is_active,
  last_login,
  created_at,
  updated_at,
  accountStat
}: TableType) {
  const router = useRouter();
  const newBrokerDB = Object.entries<string>(brokerDB);

  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {name}
        </th>
        <td className="py-4 px-6">
          {newBrokerDB.map((newBrokerEl, idx) => broker_id === newBrokerEl[0] && <div key={idx}> {newBrokerEl[1]} </div>)}
        </td>
        <td className="py-4 px-6">{number ?? email}</td>
        <td className="py-4 px-6">
          {accountStat?.map((accountEl, idx) => accountEl.statusNum === status && <div key={idx}> {accountEl.status} </div>)}
        </td>
        <td className="py-4 px-6">{router.pathname === '/accountlists' ? name : birth_date}</td>
        <td className="py-4 px-6">{assets ?? phone_number}</td>
        <td className="py-4 px-6">{payments ?? last_login}</td>
        <td className="py-4 px-6">{}</td>
        {/* <td className="py-4 px-6">{created_at}</td>  */}
      </tr>
    </tbody>
  );
}

const TableWraper = styled.tbody``;

export default Table;
