

import { Stack } from "react-bootstrap"
import { useCartContext } from "../../context/CartContext"
import { formatCurrency } from "../../utilities/formateCurrency"

type CartItemProps = {
    id: number
}

const CartItem = ({ id }: CartItemProps) => {
    const { cartItems, addItem, removeItem } = useCartContext()
    const item = cartItems.find(i => i.id === id)
    if (!item) return (<> No item to show </>)
    console.log(item.price)

    return (
        <>
            <Stack direction="horizontal" className="d-flex align-items-center  bg-dark" gap={3} >
                {/* <div className="d-flex justify-content-between bg-dark shadow-lg p-1 align-items-center  m-1" > */}
                <div className="border"> <img src={item.thumbnail} style={{ height: '100px', width: '150px', objectFit: "cover" }} alt="" />  </div>
                <div className="me-auto">
                    <div className=""> <h5 className="text-info "> {item.title} </h5>  </div>
                    <div className=""> <h5 className="text-light" style={{ fontSize: "0.9rem" }}> {formatCurrency(item.price * item.quantity)} </h5>  </div>
                </div>
                <div className="m-2 d-flex align-items-center">
                    <button type="button" className="btn btn-sm btn-info" onClick={() => addItem(item)} >+</button>
                    <span className="text-info m-2" > {item.quantity} </span>
                    <button type="button" className={`btn btn-sm btn-${item.quantity == 1 ? 'danger' : 'info'}`} onClick={() => removeItem(item)} >-</button>
                    {/* </div> */}
                </div>
            </Stack>

        </>
    )

}
export default CartItem