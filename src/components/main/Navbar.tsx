import { ReactElement, useState } from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ShoppingCartIcon from "../svg/cart";

const Navbar = (): ReactElement => {
    const { getCartLength, handleToggleCart, showCart } = useCartContext();


    return (<>
        <NavbarBs sticky="top" className="bg-dark text-info p-3 shadow-lg mb-3">
            <Container fluid>
                <NavbarBs.Brand to={"/"} as={NavLink} className="text-info"> Shopping  </NavbarBs.Brand>
                <NavbarBs.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to={"/home"} as={NavLink} className="text-info"> Home</Nav.Link>
                        <Nav.Link to={"/shopping"} as={NavLink} className="text-info"> Shopping </Nav.Link>
                        <Nav.Link to={"/about"} as={NavLink} className="text-info"> About</Nav.Link>
                    </Nav>
                </NavbarBs.Collapse>
                <NavbarBs.Collapse className="justify-content-end">
                    {/* <Nav.Link to={"/cart"} as={NavLink} className="text-info"> */}
                    <Button variant="outline-light"
                        onClick={handleToggleCart}
                        style={{ position: "relative" }}
                    >
                        <ShoppingCartIcon />
                        <span className="border rounded-circle p-1 bg-primary text-warning " style={{ position: "absolute", bottom: -13, transform: "rotateY(0deg) rotateX(50deg)" }}> {getCartLength()} </span>
                    </Button>
                    {/* </Nav.Link> */}
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>
    </>)

}
export default Navbar;