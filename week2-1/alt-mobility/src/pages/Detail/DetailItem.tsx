import styled, { css } from 'styled-components';
import { responsive } from '../../styles/mixin';
import { DeviceTypes, Datas } from '../../types';
import { comma } from '../../utils';

interface DetailProps {
  state: Datas;
  dateString: string;
}

function DetailItem({ state, dateString }: DetailProps): React.ReactElement {
  return (
    <>
      <Container>
        <div className="imgInner">
          <img src={state.attribute.imageUrl} alt="디테일 이미지" />
        </div>
        <div className="titleInner">
          <p>{state.attribute.brand}</p>
          <p>{state.attribute.name}</p>
        </div>
        <div className="amountInner">
          <p>월{comma(String(state.amount))}원</p>
        </div>
      </Container>
      <BgColor>
        <Container>
          <p>차량 정보</p>
        </Container>
      </BgColor>
      <Container className="dece">
        <div>
          <div>차량</div>
          <p>{state.attribute.segment}</p>
        </div>
        <div>
          <div>연료</div>
          <p>{state.attribute.fuelType}</p>
        </div>
        <div>
          <div>이용 가능일</div>
          <p>{dateString} 부터</p>
        </div>
      </Container>
      <BgColor>
        <Container>
          <p>보험</p>
        </Container>
      </BgColor>
      <Container className="dece">
        <div>
          <p>{state.insurance[0].name}</p>
          <p>{state.insurance[0].description}</p>
        </div>
        <div>
          <p>{state.insurance[1].name}</p>
          <p>{state.insurance[1].description}</p>
        </div>
      </Container>
      <BgColor>
        <Container>
          <p>추가상품</p>
        </Container>
      </BgColor>
      <Container className="dece">
        <div>
          <p>{state.additionalProducts[0]?.name}</p>
          <p>{state.additionalProducts[0] && comma(String(state.additionalProducts[0].amount))}</p>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  ${responsive(DeviceTypes.PhonedeviceSm)} {
    width: 100%;
    margin: 0 auto;
    padding: 16px 20px;
    .imgInner img {
      width: 100%;
    }

    .amountInner {
      padding-top: 20px;
      text-align: right;
    }
    &.dece > div {
      display: flex;
      justify-content: space-between;
      padding: 13px 0;
      font-size: 17px;
    }

    ${({ theme }) => {
      const { fontWeight } = theme;
      return css`
        .titleInner p:first-child {
          font-size: 20px;
        }
        .titleInner p:last-child {
          font-size: 24px;
        }
        .titleInner p {
          font-weight: ${fontWeight.bold};
          font-size: 17px;
        }
      `;
    }}
  }
`;

const BgColor = styled.div`
  p {
    color: #fff;
  }

  ${({ theme }) => {
    const { colors, fontWeight } = theme;
    return css`
      background-color: ${colors.point};
      p {
        font-weight: ${fontWeight.bold};
      }
    `;
  }}
`;

export default DetailItem;
