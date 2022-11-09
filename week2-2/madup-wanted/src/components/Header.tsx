import styled, { css } from 'styled-components';

function Header() {
  return (
    <HeaderWape>
      <span className="iconItem">
        <i className="ic-notice" />
      </span>
      <span className="iconItem">
        <i className="ic-setting" />
      </span>
      <span className="iconItem person">
        <i className="ic-person" />
      </span>
      <span className="iconItem">원티드님</span>
    </HeaderWape>
  );
}

const HeaderWape = styled.div`
  ${({ theme }) => {
    const { fontWeight, colors } = theme;
    return css`
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: end;
      align-items: center;
      margin-right: 40px;
      border-bottom: 1px solid ${colors.grayF1};
      .iconItem {
        margin-right: 30px;
        position: relative;
      }
      .iconItem:first-child::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #ea3a4b;
        border-radius: 50%;
        position: absolute;
        top: -8px;
        right: -8px;
      }
      .iconItem:last-child {
        margin-right: 0;
      }
      .iconItem.person {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #edeff1;
        border: 1px solid #d1d8dc;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .iconItem i {
        font-size: 24px;
      }
    `;
  }};
`;

export default Header;
