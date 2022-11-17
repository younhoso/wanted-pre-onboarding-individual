import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import NavBar from 'src/componets/NavBar';
import Header from 'src/componets/Header';
import Footer from 'src/componets/Footer';

function Layout() {
  const router = useRouter();
  const {id} = router.query;

  const AccountList = dynamic(() => import('src/componets/AccList'), {
    loading: () => <Loader>Loading ...</Loader>,
    ssr: false,
  });

  const UserList = dynamic(() => import('src/componets/UserList'), {
    loading: () => <Loader>Loading ...</Loader>,
    ssr: false,
  });

  const Detail = dynamic(() => import('src/componets/Detail'), {
    loading: () => <Loader>Loading ...</Loader>,
    ssr: false,
  });

  return (
    <HomeWraper>
      <NavBar />
      <BodyWraper>
        <Header />
          {router.pathname === '/accountlists' && <AccountList PAGE_SIZE={10} />}
          {router.asPath === `/accountlists/${id}` && <Detail />}
          {router.pathname === '/userlists' && <UserList PAGE_SIZE={10} />}
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

const Loader = styled.div`
  min-height: 790px;
  text-align: center;
  display: block;
`;
export default Layout;
