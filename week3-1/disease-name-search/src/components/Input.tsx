import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useSickcd } from '../context/SickcdContext';
import Button from './Button';
import SearchBox from './SearchBox';

const initState = {
  open: false,
  text: '',
};

interface initState {
  open: boolean;
  text: string;
}

function Input() {
  const [values, setValues] = useState<initState>(initState);
  const { getSickCd } = useSickcd();

  const handleFocus = () => {
    setValues((prev) => ({
      ...prev,
      open: true,
    }));
  };
  const handleBlur = () => {
    setValues((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    getSickCd(value);
  };

  return (
    <InputWrap>
      <Inputed
        name="search"
        type="search"
        placeholder="질환명을 입력해 주세요"
        onChange={handleText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Button iconClass="ic-search" customStyle={BtnStyle} />
      {values.open && <SearchBox />}
    </InputWrap>
  );
}

const InputWrap = styled.div`
  width: 480px;
  margin: 0 auto;
  position: relative;
`;
const BtnStyle = css`
  width: 48px;
  height: 48px;
  line-height: 48px;
  padding-left: 30px;
  text-align: left;
  background-color: #007be9;
  border-radius: 50%;
`;

const Inputed = styled.input`
  width: 480px;
  height: 73px;
  border: 1px solid #d2d2d2;
  border-radius: 50px;
  padding: 0 80px 0 40px;
  font-size: 20px;
  margin-top: 40px;
  &::placeholder {
    color: #d2d2d2;
  }
  &:focus {
    border: 2px solid #007be9;
  }
`;

export default Input;
