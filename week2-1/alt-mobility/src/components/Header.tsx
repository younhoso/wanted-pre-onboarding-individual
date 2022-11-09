/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { flexBox, responsive } from '../styles/mixin';
import { DeviceTypes } from '../types';
import IconBack from '../assets/img/ICON_Back.svg';

interface HeaderProps {
  title?: string;
}

function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  const backLink = () => {
    navigate('/');
  };

  return (
    <Container>
      {title === '차량상세' && (
        <span className="array" onClick={backLink}>
          <img src={IconBack} alt="아이콘 이미지" />
        </span>
      )}
      <span>{title}</span>
    </Container>
  );
}
const Container = styled.header`
  ${responsive(DeviceTypes.PhonedeviceSm)} {
    ${flexBox()}
    width: 100%;
    height: 60px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
    border-bottom: 1px solid #000;
    background-color: #fff;
    position: fixed;
    .array {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }

    ${({ theme }) => {
      const { fontWeight } = theme;
      return css`
        font-weight: ${fontWeight.bold};
      `;
    }}
  }
`;
export default Header;
