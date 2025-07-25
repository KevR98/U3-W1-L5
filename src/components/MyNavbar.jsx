import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';

const MyNavbar = () => {
  return (
    <>
      <Navbar expand='lg' className='bg-dark' data-bs-theme='dark'>
        <Container fluid={true}>
          <Navbar.Brand href='#home'>
            <img
              src={logo}
              width='100'
              height='55'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#'>Home</Nav.Link>
              <Nav.Link href='#'>TV Shows</Nav.Link>
              <Nav.Link href='#'>Movies</Nav.Link>
              <Nav.Link href='#'>Recently Added</Nav.Link>
              <Nav.Link href='#'>My List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
