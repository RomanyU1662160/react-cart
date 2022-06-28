import { createContext, ReactNode, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLoclaStorage";
import useLocalStorage2 from "../hooks/useLoclaStorage2";

type Item = {
    id: number,
    quantity: number,
    title: string,
    thumbnail: string
    price: number
}

type CartContextProps = {
    addItem: (item: Item) => void
    removeItem: (item: Item) => void
    clearCart: () => void
    cartItems: Item[]
    getCartTotal: () => number
    getCartLength: () => number
    handleShowCart: () => void
    handleHideCart: () => void
    handleToggleCart: () => void
    showCart: boolean
    totalToPay: number

}

const CartContext = createContext({} as CartContextProps)
export const useCartContext = () => {
    return useContext(CartContext)
}


type props = {
    children: ReactNode
}
export const CartContextProvider: React.FC<props> = ({ children }) => {
    //const [cartItems, setCartItems] = useLocalStorage<Item[]>('cart-items', [])
    const [cartItems, setCartItems] = useLocalStorage2<Item[]>('cart-items', [])
    const [showCart, setShowCart] = useState(false)

    const handleShowCart = () => {
        setShowCart(true)
    }

    const handleHideCart = () => {
        setShowCart(false)
    }

    const handleToggleCart = () => {
        setShowCart(!showCart)
    }


    const addItem = (item: Item) => {
        const founded = cartItems.find(i => i.id === item.id);
        if (founded) {
            founded.quantity += 1;
            setCartItems([...cartItems])
        }
        else {
            setCartItems([...cartItems, item])
        }
    }

    const removeItem = (item: Item) => {
        const founded = cartItems.find(i => i.id === item.id);

        if (!founded) { return; }
        founded.quantity -= 1;
        setCartItems([...cartItems])

        if (founded.quantity < 1) {
            setCartItems(cartItems.filter(i => i.id !== item.id))
        }
    }

    const clearCart = () => {
        setCartItems([])
    }

    const getCartLength = (): number => {
        let length: number = 0;
        cartItems.map(i => { length += i.quantity })
        return length;
    }

    const getCartTotal = (): number => {
        let total: number = 0;
        cartItems.map(i => { total += i.price * i.quantity })
        return total;
    }

    // another way to get total cart price
    const totalToPay: number = cartItems.reduce((acc, cur) => {
        return acc + cur.price * cur.quantity
    }, 0)

    return (
        <CartContext.Provider value={{ totalToPay, addItem, removeItem, clearCart, cartItems, getCartTotal, getCartLength, handleHideCart, handleShowCart, handleToggleCart, showCart }}>
            {children}
        </CartContext.Provider>
    )

}
