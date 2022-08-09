import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  NavItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Admin from "../../admin/Admin"
import ClienteForm from "../../admin/clientes/ClienteForm";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <i class="bi bi-tools"></i> Prestador
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="prestador" />
        <Navbar.Collapse id="prestador">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <i class="bi bi-person-fill"></i>
            <NavDropdown id="navbarScrollingDropdown">
              <NavDropdown.Item  as={Link} to="../../admin/Adimin">Novo cadastro</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="../../admin/clientes/ClientesForm">Login</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">
              {" "}
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
