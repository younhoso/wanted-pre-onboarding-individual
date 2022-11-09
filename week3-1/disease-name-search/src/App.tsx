import styled from 'styled-components';
import Input from './components/Input';

function App() {
  return (
    <Wrap>
      <H2>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </H2>
      <Input />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 60px auto 0 auto;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 2.125rem;
  font-weight: 700;
`;

export default App;
