
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cartwidget from './CartWidget';
import { Link } from "react-router-dom";

function Navbarcomponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand as={Link} to="/" >LAFER</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="CAMISAS" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categoria/camisa-larga">Manga larga</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/camisa-corta">Manga corta</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/categoria/remeras" >REMERAS</Nav.Link>
            <Nav.Link as={Link} to="/categoria/pantalones">PANTALONES</Nav.Link>
            <Nav.Link as={Link} to="/categoria/accesorios">ACCESORIOS</Nav.Link>
            <Nav.Link as={Link} to="/faq">PREGUNTAS FRECUENTES</Nav.Link>
            <Nav.Link as={Link} to="/about-us">¿QUIENES SOMOS?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Cartwidget/>
      </Container>
    </Navbar>
  );
}

export default Navbarcomponent;