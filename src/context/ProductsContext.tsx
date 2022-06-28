import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Product } from '../interfaces/Product'


type ProductsContext = {
    getProducts: () => Promise<Product[]>,
    getProduct: (id: number) => Promise<Product>,
    addProduct: (data: Partial<Product>) => Promise<Product>,
    updateProduct: (id: number, data: Partial<Product>) => Promise<Product>,
    isLoading: boolean,
}

const ProductsContext = createContext({} as ProductsContext)

export const useProdcutsContext = () => {
    return useContext(ProductsContext)
}


type props = {
    children: ReactNode
}
const dummyDataUrl = "https://dummyjson.com"

const ProductsProvider: React.FC<props> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getProducts = async (limit: number = 20): Promise<Product[]> => {
        setIsLoading(true)
        const res = await fetch(`${dummyDataUrl}/products?limit=${limit}`);
        const data = await res.json()
        data ? setIsLoading(false) : setIsLoading(true)
        return data.products
    }

    const getProduct = async (id: number): Promise<Product> => {
        const res = await fetch(`${dummyDataUrl}/products/${id}`)
        const data = await res.json()
        return data
    }


    const updateProduct = async (id: number, data: Partial<Product>): Promise<Product> => {
        const res = await fetch(`${dummyDataUrl}/products/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const product = await res.json();
        console.log("product: >>>", product)
        return product
    }

    const addProduct = async (data: Partial<Product>): Promise<Product> => {
        const res = await fetch(`${dummyDataUrl}/products`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const product = await res.json();
        return product

    }

    return (
        <ProductsContext.Provider value={{ addProduct, updateProduct, getProducts, getProduct, isLoading }}>
            {children}
        </ProductsContext.Provider>
    )

}
export default ProductsProvider