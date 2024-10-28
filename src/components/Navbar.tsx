import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
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
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          {links.map((link) => (
            <Nav.Link to={link.url} as={NavLink}>
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
        <button
        onClick={openCart}
          style={{
            width: "2.5rem",
            height: "2.5rem",
            paddingRight: "9px",
            position: "relative",
          }}
          className="border border-info rounded-circle"
        >
          <ShoppingCartIcon />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.2rem",
              height: "1.2rem",
              position: "absolute",
              bottom: 0,
              right: -0,
              transform: "translate(25%, 25%)",
              paddingLeft: "1px",
            }}
          >
            {cartQuantity}
          </div>
        </button>
      </Container>
    </NavbarBs>
  );
}
