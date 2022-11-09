import styled, { css } from 'styled-components';
import AdBox from '../../components/AdBox';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';

function Dashboard() {
  return (
    <>
      <SideMenu />
      <DashboardWape>
        <Header />
        <div className="dashboardHeade">
          <h3>대시보드</h3>
          <div className="dashboardDay">
            <select>
              <option>2021년 11월 11일 ~ 2021년 11월 16일</option>
              <option>2021년 12월 11일 ~ 2021년 12월 16일</option>
            </select>
            <i className="ic-down" />
          </div>
        </div>
        <div className="dashboarBody">
          <h5>통합 광고 현황</h5>
          <div className="dashboarBodyInner">
            <div>
              <AdBox />
            </div>
          </div>
        </div>
      </DashboardWape>
    </>
  );
}

const DashboardWape = styled.div`
  ${({ theme }) => {
    const { fontWeight, colors } = theme;
    return css`
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
        border-radius: 20px;
        box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
      }
    `;
  }};
`;
export default Dashboard;
