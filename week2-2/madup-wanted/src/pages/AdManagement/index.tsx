import styled, { css } from 'styled-components';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';

function AdManagement() {
  return (
    <>
      <SideMenu />
      <AdWape>
        <Header />
        <div className="dashboardHeade">
          <h3>광고관리</h3>
        </div>
        <div className="dashboarBody">
          <div className="dashboarBodyInner">
            <div>eeee</div>
          </div>
        </div>
      </AdWape>
    </>
  );
}

const AdWape = styled.div`
  ${({ theme }) => {
    const { fontWeight, colors } = theme;
    return css`
      height: 100vh;
      padding: 0 40px 0 360px;
      background-color: ${colors.grayF8};

      height: 100vh;
      padding: 0 40px 0 360px;
      background-color: ${colors.grayF8};

      .dashboardHeade {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .dashboardHeade .dashboardDay {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .dashboardHeade .dashboardDay select {
        padding-right: 10px;
        appearance: none;
      }
      .dashboardHeade h3 {
        font-size: 26px;
        font-weight: ${fontWeight.bold};
        color: ${colors.gray4E};
      }
      .dashboardHeade i {
        font-size: 24px;
      }
      .dashboarBody {
        margin-top: 20px;
      }
      .dashboarBody h5 {
        padding-top: 20px;
        font-weight: ${fontWeight.bold};
        color: ${colors.gray4E};
      }
      .dashboarBody .dashboarBodyInner {
        margin-top: 20px;
        padding: 20px 40px;
        background-color: #fff;
      }
    `;
  }};
`;

export default AdManagement;
