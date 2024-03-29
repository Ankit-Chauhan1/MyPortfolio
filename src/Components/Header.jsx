import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
function Header() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-2 py-md-3 text-uppercase navlinks fixed-top position-fixed">
      <Container className="py-2 text-white">
        <Navbar.Brand as={Link} to="/">
          <img src="image/Asif ali.png" className='img'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About me
            </Nav.Link>
            <Nav.Link as={Link} to="/skills">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/education">
              Education
            </Nav.Link>
            <Nav.Link as={Link} to="/experience">
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
          </Nav>
          <div>
          <Nav.Link className='contact_me  mx-lg-3 text-center rounded-pill fw-medium' as={Link} to="/contact">
          Contact
           </Nav.Link>
          
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
