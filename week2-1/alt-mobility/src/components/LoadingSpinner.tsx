import styled from 'styled-components';

function LoadingSpinner() {
  return <Container>불러오는 중</Container>;
}

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export default LoadingSpinner;
