import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { useState } from "react";

export function Navbar() {
  const [links] = useState([
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/Store",
      label: "Store",
    },
    {
      url: "/About",
      label: "About",
    },
  ]);
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          {links.map((link) => (
            <Nav.Link to={link.url} as={NavLink}>
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
        <button
          style={{ width: "2.5rem", height: "2.5rem", paddingRight: "8px" }}
          variant="outline-primary"
          className="border border-primary rounded-circle"
        >
          <ShoppingCartIcon />
        </button>
      </Container>
    </NavbarBs>
  );
}
