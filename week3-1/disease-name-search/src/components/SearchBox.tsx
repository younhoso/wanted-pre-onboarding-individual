/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
import styled, { css } from 'styled-components';
import { Sick } from '../types';
import Button from './Button';

interface valuesProps {
  keyword: string
  sick: Sick
}

function SearchBox({keyword, sick}:valuesProps) {
  const name = sick.sickNm
  const matchText = name?.split(new RegExp(`(${keyword})`, "gi"));

  return (
    <>
    <SearchBoxWrap>
    <Button iconClass="ic-search" customStyle={BtnStyle}/>
      { 
        // eslint-disable-next-line arrow-body-style
        matchText.map((splitedText, index) => {
          return splitedText === keyword && (
            <Text key={index}>
              {name}
            </Text>
          )
        })
      }
      
    </SearchBoxWrap>
    </>
  );
}

const BtnStyle = css`
  width: 20px;
  height: 20px;
  text-align: left;
  background-color: #007be9;
  border-radius: 50%;
`

const SearchBoxWrap = styled.div`
  padding-bottom: 14px;
`;

const Text = styled.div`
  font-weight: 600;
`
export default SearchBox;
