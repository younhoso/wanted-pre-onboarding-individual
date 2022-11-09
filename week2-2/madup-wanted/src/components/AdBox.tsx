import styled, { css } from 'styled-components';
import { useFilteredAdsValue } from '../store/ad.atoms';

function AdBox() {
  const adsData = useFilteredAdsValue();

  return (
    <>
      <AdBoxWape>
        <div>
          {adsData.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      </AdBoxWape>
    </>
  );
}

const AdBoxWape = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      border: 1px solid ${colors.grayF1};
    `;
  }};
`;

export default AdBox;
