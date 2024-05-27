import { Button, Container, Nav, Navbar as NavbarBs, NavDropdown, Form, FormControl } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <NavLink to="/">
          <img src="../public/logo-navbar.svg" alt="Logo" style={{ marginRight: '10px' }} />
        </NavLink>
        <div className="dropdown-on-hover">
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="/store">Store</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Category 3</NavDropdown.Item>
          </NavDropdown>
        </div>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search for any thing..."
            className="mr-2"
            aria-label="Search"
          />
        </Form>
        <Nav.Link href="#notifications">Notifications</Nav.Link>
        <Button variant="outline-primary" className="me-2">Login</Button>
        <Button variant="primary">Sign Up</Button>
      </Container>
    </NavbarBs>
  )
}