/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import { useSickcd } from '../context/SickcdContext';
import SearchBox from './SearchBox';

type SearchBoxListProps = {
  keyword: string;
};

function SearchBoxList({ keyword }: SearchBoxListProps) {
  const { sick } = useSickcd();

  return (
    <SearchBoxListWrap>
      {!sick.length ? (
        <Text>검색어 없음</Text>
      ) : !keyword ? (
        <Text>검색어 없음</Text>
      ) : (
        sick.map((el, idx) => <SearchBox key={idx} sick={el} keyword={keyword} />)
      )}
    </SearchBoxListWrap>
  );
}

const SearchBoxListWrap = styled.div`
  width: 480px;
  max-height: 400px;
  margin: 20px auto 0 auto;
  overflow-y: auto;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  text-align: left;
  box-shadow: 0 4px 12px rgb(34 34 34 / 20%);
`;

const Text = styled.div``;
export default SearchBoxList;
