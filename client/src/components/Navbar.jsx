import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/BlueTechtonicaWord.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// source: https://feathericons.com/
import { Heart } from 'react-feather';


function MyNavBar(props) {

  return (
    <>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="https://techtonica.org/">
        <img
              src={Logo}
              height="30"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hosted By <a href="https://www.linkedin.com/in/rubymarroquin/">Ruby Marroquin <Heart/></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default MyNavBar;