import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function NavBar() {
  const router = useRouter();

  return (
    <NavbarWraper>
      <aside className="navbarWraper" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul className="listInner space-y-2">
            <li>
              <Link href="#0">
                <a className="navbar-hover flex items-center p-2 text-base font-normal rounded-lg text-white">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 transition duration-75 dark:text-gray-400 text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">대시보드</span>
                </a>
              </Link>
            </li>
            <li className={`account ${router.pathname === '/accountlists' ? 'on' : 'off'}`}>
              <Link href="/accountlists">
                <a className="navbar-hover flex items-center p-2 text-base font-normal rounded-lg text-white">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 transition duration-75 dark:text-gray-400 text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">계좌목록</span>
                </a>
              </Link>
            </li>
            <li className={`userlist ${router.pathname === '/userlists' ? 'on' : 'off'} user`}>
              <Link href="/userlists">
                <a className="navbar-hover flex items-center p-2 text-base font-normal rounded-lg text-white">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 transition duration-75 dark:text-gray-400 text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">사용자</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="login">
                <a className="navbar-hover flex items-center p-2 text-base font-normal rounded-lg text-white">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 transition duration-75 dark:text-gray-400 text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </NavbarWraper>
  );
}

const NavbarWraper = styled.div`
  position: fixed;
  width: 16rem;
  z-index: 9;
  aside {
    height: 100vh;
  }
  aside > div {
    height: 100%;
    background-color: #4e59c8;
  }
  .listInner {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .account.on a{ background-color: #4049a4;}
  .userlist.on a{ background-color: #4049a4;}
  .user {
    height: 100%;
    flex-grow: 0.9;
  }
  .navbar-hover:hover {
    background-color: #4049a4;
  }
`;

export default NavBar;
