import { ReactElement } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartList from "../components/Cart/CartList";
import { useCartContext } from "../context/CartContext";

const CartPage = (): ReactElement => {
    const { showCart, handleHideCart } = useCartContext();
    console.log(`showCart`, showCart);
    return (<>
        <Offcanvas show={showCart} onHide={handleHideCart} placement='end' style={{ width: '40%' }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <Nav.Link to={"/cart"} as={NavLink} className="text-info">
                        <button className="btn btn-info btn-sm float-right" onClick={handleHideCart}> Go to cart</button>
                    </Nav.Link>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <CartList />
            </Offcanvas.Body>

        </Offcanvas>

    </>)



}
export default CartPage;