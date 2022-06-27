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

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container-md>
      
        <Navbar.Brand href="#"><i class="bi bi-tools"></i> Prestador</Navbar.Brand>
        <Navbar.Toggle aria-controls="prestador" />
        <Navbar.Collapse id="prestador">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
           
           
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1"> <i class="bi bi-person-circle"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container-md>
    </Navbar>
  );
}
