import ReactPaginate from 'react-paginate';
import { useQuery } from '@tanstack/react-query';
import usePaginate, { initalValu } from '@hooks/usePaginate';
import styled from 'styled-components';
import { apis } from 'src/api/decemberAxios';
import AccTable from './AccTable';
import { AccType } from 'src/types';

function AccountList({ PAGE_SIZE }: initalValu) {
  const { data: accountsCurrent } = useQuery(['accountCurrent'], async () => await apis.accountsGet());
  const { currentItems, pageCount, handlePageClick } = usePaginate<AccType>({ PAGE_SIZE }, accountsCurrent?.data);

  return (
    <ListWraper className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
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
        {currentItems?.map((el: AccType) => (
          <AccTable
            key={el.id}
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

      <BtnWrap>
        <ReactPaginate
          breakLabel="..."
          previousLabel="< previous"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          nextLabel="next >"
        />
      </BtnWrap>
    </ListWraper>
  );
}

const ListWraper = styled.div`
  width: 100%;
  min-height: 790px;
  padding: 30px;
  thead {
    background-color: #e6e6e6;
  }
`;

const BtnWrap = styled.div`
  height: 100px;
  ul {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul li {
    padding: 0 20px;
  }
  ul li.selected {
    color: #fff;
    border: 1px solid #4e59c8;
    background-color: #6875f5;
    border-radius: 28px;
  }
`;

export default AccountList;
