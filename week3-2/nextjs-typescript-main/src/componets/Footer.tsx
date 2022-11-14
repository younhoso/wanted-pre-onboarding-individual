import styled from 'styled-components';

function Footer() {
  return <FooterWraper>Copyright ⓒ December and Company Inc.</FooterWraper>;
}

const FooterWraper = styled.div`
  padding: 20px 30px;
  border-top: 1px solid #e6e6e6;
  text-align: center;
`;

export default Footer;
