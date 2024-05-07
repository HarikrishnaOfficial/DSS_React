import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from "/carousel/logo.png";

function NavComponent() {
  return (
    <>
      <Navbar expand="lg" className="bg-light fixed-top">
        <Container>
          <img className='logoimg' src={logoImage} alt="logo Image"/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="NavItems">
              <Nav.Link href="home">HOME</Nav.Link>
              <Nav.Link href="#link">ABOUT</Nav.Link>
              <Nav.Link href="events">EVENS</Nav.Link>
              <Nav.Link href="#link">BLOGS</Nav.Link>
              <Nav.Link href="#link">PUJA SHOP</Nav.Link>
              <Nav.Link href="#link">GALLERY</Nav.Link>
              <Nav.Link href="#link">CONTACT US</Nav.Link>
              <Nav.Link href=""><button className="LogInBtn text-capitalize">Your Bag</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavComponent;