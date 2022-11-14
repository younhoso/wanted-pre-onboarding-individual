import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { type } from 'os';
import { useState } from 'react';
import { apis } from 'src/api/decemberAxios';
import styled from 'styled-components';

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

type txt = {
  is: boolean;
  msg: string;
};
const initAccounts = [
  { is: false, msg: 'bad' },
  { is: true, msg: 'good' },
];

function List() {
  const [isActive, setIsActive] = useState<txt[]>(initAccounts);
  const { data } = useQuery(['acc'], apis.accountsGet);

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
        <tbody>
          {data?.data.map((el: accounts) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {el.name}
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">{el.number}</td>
              <td className="py-4 px-6">계좌상태</td>
              <td className="py-4 px-6">{el.name}</td>
              <td className="py-4 px-6">{el.assets}</td>
              <td className="py-4 px-6">{el.payments}</td>
              <td className="py-4 px-6">{}</td>
              <td className="py-4 px-6">{el.created_at}</td>
            </tr>
          ))}
          {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Apple MacBook Pro 17"
                      </th>
                      <td className="py-4 px-6">
                          Sliver
                      </td>
                      <td className="py-4 px-6">
                          Laptop
                      </td>
                      <td className="py-4 px-6">
                          $2999
                      </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Microsoft Surface Pro
                      </th>
                      <td className="py-4 px-6">
                          White
                      </td>
                      <td className="py-4 px-6">
                          Laptop PC
                      </td>
                      <td className="py-4 px-6">
                          $1999
                      </td>
                  </tr> */}
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Magic Mouse 2
            </th>
            <td className="py-4 px-6">Black</td>
            <td className="py-4 px-6">Accessories</td>
            <td className="py-4 px-6">$99</td>
          </tr>
        </tbody>
      </table>
    </ListWraper>
  );
}

const ListWraper = styled.div`
  width: 100%;
  padding: 30px;
`;

export default List;
