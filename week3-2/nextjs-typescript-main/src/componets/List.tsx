import { useQuery } from '@tanstack/react-query';
import { apis } from 'src/api/decemberAxios';
import styled from 'styled-components';
import Table from './Table';

type accounts = {
  id: number;
  user_id: number;
  uuid: string;
  broker_id: string;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

function List() {
  const { data } = useQuery(['account'], apis.accountsGet);

  return (
    <ListWraper className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              고객명
            </th>
            <th scope="col" className="py-3 px-6">
              브로커명
            </th>
            <th scope="col" className="py-3 px-6">
              계좌번호
            </th>
            <th scope="col" className="py-3 px-6">
              계좌상태
            </th>
            <th scope="col" className="py-3 px-6">
              계좌명
            </th>
            <th scope="col" className="py-3 px-6">
              평가금액
            </th>
            <th scope="col" className="py-3 px-6">
              입금금액
            </th>
            <th scope="col" className="py-3 px-6">
              계좌활성화여부
            </th>
            <th scope="col" className="py-3 px-6">
              계좌개설일
            </th>
          </tr>
        </thead>
        {data?.data.map((el: accounts, indx: number) => (
          <Table
            key={indx}
            id={el.id}
            user_id={el.user_id}
            uuid={el.uuid}
            broker_id={el.broker_id}
            status={el.status}
            number={el.number}
            name={el.name}
            assets={el.assets}
            payments={el.payments}
            is_active={el.is_active}
            created_at={el.created_at}
            updated_at={el.updated_at}
          />
        ))}
      </table>
    </ListWraper>
  );
}

const ListWraper = styled.div`
  width: 100%;
  padding: 30px;
`;

export default List;
