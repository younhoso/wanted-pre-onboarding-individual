import styled from 'styled-components';

function SearchBox() {
  return (
    <SearchBoxWrap>
      <div>최근 검색어</div>
    </SearchBoxWrap>
  );
}

const SearchBoxWrap = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  text-align: left;
  position: absolute;
`;
export default SearchBox;
