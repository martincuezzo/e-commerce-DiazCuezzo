
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarcomponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">LAFER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="CAMISAS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Manga larga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Manga corta</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">REMERAS</Nav.Link>
            <Nav.Link href="#link">PANTALONES</Nav.Link>
            <Nav.Link href="#home">ACCESORIOS</Nav.Link>
            <Nav.Link href="#link">PREGUNTAS FRECUENTES</Nav.Link>
            <Nav.Link href="#link">¿QUIENES SOMOS?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomponent;