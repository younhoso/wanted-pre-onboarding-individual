import styled from 'styled-components';
import NavBar from 'src/componets/NavBar';

function About() {
  return (
    <div>
      <NavBar />
      <AboutWraper>About</AboutWraper>
    </div>
  );
}

const AboutWraper = styled.div`
  color: red;
  font-size: 120px;
`;

export default About;
