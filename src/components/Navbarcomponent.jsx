
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cartwidget from './CartWidget';

function Navbarcomponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#x">LAFER</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="CAMISAS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Manga larga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Manga corta</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#x">REMERAS</Nav.Link>
            <Nav.Link href="#x">PANTALONES</Nav.Link>
            <Nav.Link href="#x">ACCESORIOS</Nav.Link>
            <Nav.Link href="#x">PREGUNTAS FRECUENTES</Nav.Link>
            <Nav.Link href="#x">¿QUIENES SOMOS?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Cartwidget/>
      </Container>
    </Navbar>
  );
}

export default Navbarcomponent;