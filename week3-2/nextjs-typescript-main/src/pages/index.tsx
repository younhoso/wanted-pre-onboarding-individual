import styled, { css } from 'styled-components';
import List from 'src/componets/List';
import NavBar from 'src/componets/NavBar';
import Header from 'src/componets/Header';

function Home() {
  return (
    <>
      <HomeWraper>
        <NavBar />
        <BodyWraper>
          <Header />
          <List />
        </BodyWraper>
      </HomeWraper>
    </>
  );
}

const HomeWraper = styled.div`
  display: flex;
`;
const BodyWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 256px;
`;

export default Home;
