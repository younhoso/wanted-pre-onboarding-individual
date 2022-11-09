import styled, { css } from 'styled-components';
import Bridge from '../../components/Bridge';
import { flexBox, responsive } from '../../styles/mixin';
import { Datas, DeviceTypes } from '../../types';
import { comma } from '../../utils';

interface MainProps {
  item: Datas;
}

function MainItem({ item }: MainProps): React.ReactElement {
  const {
    amount,
    attribute: { brand, name, segment, fuelType, imageUrl },
  } = item;
  return (
    <Container>
      <div>
        <div className="titleInner">
          <H3Title>{brand}</H3Title>
          <PTitle>{name}</PTitle>
        </div>
        <div className="description">
          <span>{segment}</span> / <span>{fuelType}</span>
          <p>월 {comma(String(amount))}원 부터</p>
        </div>
      </div>
      <ThumImg>
        <img src={imageUrl} alt="자동차 셈네일 이미지" />
        <div>
          <Bridge>신규</Bridge>
        </div>
      </ThumImg>
    </Container>
  );
}

const Container = styled.div`
  ${responsive(DeviceTypes.PhonedeviceSm)} {
    width: 100%;
    margin: 0 auto;
    padding: 20px;

    ${flexBox('row', 'space-between')} {
      border-bottom: 1px solid #000;
    }
    .titleInner {
      margin-bottom: 16px;
    }
  }
`;

const ThumImg = styled.div`
  width: 152px;
  height: 80px;
  border-radius: 0.6rem;
  position: relative;

  div {
    position: absolute;
    top: -5px;
    right: -8px;
  }

  img {width: 100%;}

  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.grayD9};
    `;
  }}
`;

const H3Title = styled.h3`
  ${({ theme }) => {
    const { fontWeight } = theme;
    return css`
      font-weight: ${fontWeight.bold};
    `;
  }}
`;

const PTitle = styled.p`
  ${({ theme }) => {
    const { fontWeight } = theme;
    return css`
      font-weight: ${fontWeight.bold};
    `;
  }}
`;

export default MainItem;
