import ReactPaginate from 'react-paginate';
import { useQuery } from '@tanstack/react-query';
import usePaginate, { initalValu } from '@hooks/usePaginate';
import { apis } from 'src/api/decemberAxios';
import styled from 'styled-components';
import UserTable from './UserTable';
import { UsersType } from 'src/types';

function UserList({ PAGE_SIZE }: initalValu) {
  const { data: users } = useQuery(['users'], async () => await apis.usersGet());
  const { data: userSetting } = useQuery(['userSetting'], apis.userSettingGet);
  const { currentItems, pageCount, handlePageClick } = usePaginate<UsersType>({ PAGE_SIZE }, users?.data);

  return (
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
        {currentItems?.map((el: UsersType) => (
          <UserTable
            key={el.id}
            id={el.id}
            name={el.name}
            uuid={el.uuid}
            photo={el.photo}
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
    </UserWraper>
  );
}

const UserWraper = styled.div`
  padding: 20px 30px;
  min-height: 790px;
  border-bottom: 1px solid #e6e6e6;
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

export default UserList;
