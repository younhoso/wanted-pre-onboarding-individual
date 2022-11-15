import styled from 'styled-components';
import AccountList from 'src/componets/AccList';
import UserList from 'src/componets/UserList';
import NavBar from 'src/componets/NavBar';
import Header from 'src/componets/Header';
import Footer from 'src/componets/Footer';
import { useRouter } from 'next/router';

function Layout() {
  const router = useRouter();
  return (
    <HomeWraper>
      <NavBar />
      <BodyWraper>
        <Header />
        {router.pathname === '/accountlists' && <AccountList />}
        {router.pathname === '/userlists' && <UserList />}
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
