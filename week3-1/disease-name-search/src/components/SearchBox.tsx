/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
import styled, { css } from 'styled-components';
import { useSickcd } from '../context/SickcdContext';
import { Sick } from '../types';
import Button from './Button';

interface valuesProps {
  keyword: string;
  sick: Sick;
}

function SearchBox({ keyword, sick }: valuesProps) {
  const { focusGetText, focusValueTxt } = useSickcd();
  const name = sick.sickNm;
  const matchText = name?.split(new RegExp(`(${keyword})`, 'gi'));

  const focusText = (e: React.FocusEvent<HTMLElement>) => {
    const getText = e.target.innerText.replace(/\n/g, '');
    focusGetText(getText);
    focusValueTxt(true);
  };

  return (
    <SearchBoxWrap href="#0" onFocus={focusText}>
      <Button customStyle={BtnStyle}>
        <i className="ic-search" />
      </Button>
      {matchText.map((splitedText, index) =>
        splitedText === keyword ? (
          <Text key={index} className="bold">
            {splitedText}
          </Text>
        ) : (
          <Text key={index} className="normal">
            {splitedText}
          </Text>
        )
      )}
    </SearchBoxWrap>
  );
}

const BtnStyle = css`
  width: 20px;
  height: 20px;
  text-align: left;
  border-radius: 50%;
  margin-right: 10px;
`;

const SearchBoxWrap = styled.a`
  margin-bottom: 14px;
  &:last-child {
    padding-bottom: 0;
  }
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  &.bold {
    font-weight: 600;
  }
  &.normal {
    font-weight: 400;
  }
`;
export default SearchBox;
