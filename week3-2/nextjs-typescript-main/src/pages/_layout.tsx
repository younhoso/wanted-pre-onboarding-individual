import styled from 'styled-components';
import List from 'src/componets/List';
import NavBar from 'src/componets/NavBar';
import Header from 'src/componets/Header';
import Footer from 'src/componets/Footer';

function Layout() {
  return (
    <HomeWraper>
      <NavBar />
      <BodyWraper>
        <Header />
        <List />
        <Footer />
      </BodyWraper>
    </HomeWraper>
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

export default Layout;
