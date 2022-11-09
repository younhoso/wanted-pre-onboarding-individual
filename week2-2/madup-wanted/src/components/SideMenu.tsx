import { Link, useMatch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from './Button';
import logo from '../assets/images/logo.png';

function SideMenu() {
  const home = useMatch('/');
  const adManagement = useMatch('/AdManagement');

  return (
    <SideMenuBx>
      <LogoWape>
        <div className="logoInner">
          <img src={logo} alt="로고" />
        </div>
      </LogoWape>

      <ServiceWape>
        <Topic>서비스</Topic>
        <select>
          <option>메드업</option>
          <option>서비스 추가하기</option>
        </select>
        <span className="icoArrow">
          <i className="ic-down" />
        </span>
      </ServiceWape>

      <AdWape>
        <Topic>광고 센터</Topic>
        <div>
          <Link to="/">
            <Button menuIcon="ic-menu01" isActive={home !== null} customStyle={BtnStyle}>
              대시보드
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/AdManagement">
            <Button menuIcon="ic-menu02" isActive={adManagement !== null} customStyle={BtnStyle}>
              광고관리
            </Button>
          </Link>
        </div>
      </AdWape>

      <AdSubWape>
        <div className="adSub">
          <i className="ic-vector" />
          <div className="adSubTit">
            <h4>레버 이용 가이드</h4>
            <p>시작하기 전에 알아보기</p>
          </div>
        </div>
        <div className="termsService">
          <p>레버는 함께 만들어갑니다</p>
          <p>이용약관</p>
        </div>
      </AdSubWape>
    </SideMenuBx>
  );
}

const BtnStyle = css`
  width: 100%;
  padding-left: 30px;
  text-align: left;
`;

const SideMenuBx = styled.div`
  width: 320px;
  height: 100vh;
  background: #ffffff;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
  padding: 0 40px;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  flex-direction: column;
`;

const LogoWape = styled.div`
  .logoInner {
    width: 124px;
    padding: 60px 0;
  }
  .logoInner img {
    width: 100%;
  }
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      border-bottom: 1px solid ${colors.grayF1};
    `;
  }}
`;

const ServiceWape = styled.div`
  margin-top: 40px;
  position: relative;
  select {
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 16px;
    appearance: none;

    ${({ theme }) => {
      const { fontWeight, colors } = theme;
      return css`
        font-weight: ${fontWeight.bold};
        color: ${colors.gray4E};
        border: 1px solid ${colors.grayDC};
      `;
    }};
  }
  .icoArrow {
    font-size: 24px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0, 20%);
  }
`;
const Topic = styled.p`
  font-size: 12px;
  padding: 13px 0 13px 20px;
  ${({ theme }) => {
    const { fontWeight, colors } = theme;
    return css`
      font-weight: ${fontWeight.bold};
      color: ${colors.grayAD};
    `;
  }};
`;

const AdWape = styled.div`
  margin-top: 40px;
  flex-grow: 0.9;
`;

const AdSubWape = styled.div`
  ${({ theme }) => {
    const { fontWeight, colors } = theme;
    return css`
      width: 100%;
      .adSub {
        font-size: 24px;
        border-radius: 10px;
        font-weight: ${fontWeight.regular};
        background-color: ${colors.blueFD};
        padding: 30px 0 30px 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: start;
        align-items: center;
      }
      .adSub i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        color: #fff;
        background-color: #586cf5;
        border-radius: 50%;
      }
      .adSubTit {
        padding-left: 8px;
      }
      .adSubTit h4 {
        font-weight: ${fontWeight.bold};
        font-size: 16px;
        margin-bottom: 7px;
      }
      .adSubTit p {
        font-size: 12px;
        font-weight: ${fontWeight.regular};
        color: ${colors.grayAD};
      }
      .termsService {
        margin-top: 40px;
        padding-left: 20px;
      }
      .termsService p {
        font-size: 12px;
        margin-bottom: 10px;
        color: ${colors.grayAD};
        &:last-child {
          display: inline-block;
          border-bottom: 1px solid ${colors.grayAD};
        }
      }
    `;
  }};
`;

export default SideMenu;
