import { ReactElement, useEffect } from "react";
import { Stack } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { formatCurrency } from "../../utilities/formateCurrency";
import CartItem from "./CartItem";

const CartList = (): ReactElement => {
    const { cartItems, getCartTotal, totalToPay } = useCartContext()

    const total = getCartTotal()
    if (!cartItems.length) {
        return (<h1 className="text-info mt-4">  No Items to show   </h1>)
    }
    return (

        <>
            <Stack gap={2} className='bg-secondary'>
                {cartItems.map(item => (<CartItem key={item.id} id={item.id} />))}
            </Stack>
            <Stack direction="horizontal" className="bg-dark p-3  mt-1" >
                <div className="ms-auto"> <strong className="text-info" style={{ fontSize: '1.5rem' }}>  Total: </strong>  <span className="text-info"> {formatCurrency(total)}</span> </div>
            </Stack>
            <Stack direction="horizontal" className="bg-dark p-3  mt-1" >
                <div className="ms-auto"> <strong className="text-info" style={{ fontSize: '1.5rem' }}>  Total: </strong>  <span className="text-info"> {formatCurrency(totalToPay)}</span> </div>
            </Stack>
        </>


    )
}

export default CartList;