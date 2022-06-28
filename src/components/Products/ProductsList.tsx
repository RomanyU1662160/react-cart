import { ReactElement, useEffect, useState } from "react";

import { useProdcutsContext } from "../../context/ProductsContext";
import { Product } from "../../interfaces/Product";
import ProductCard from "./ProductCard";


const ProductsList = (): ReactElement => {
    const { getProducts, isLoading } = useProdcutsContext()

    const [products, setProducts] = useState<Product[]>([])
    const handleFetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    }

    useEffect(() => {
        handleFetchProducts();
    }, [])

    if (isLoading) {
        return (
            <div>...loading</div>
        )
    }

    if (products) {
        return (
            <div className="row" >
                {products?.map((product: Product) => {
                    return (
                        <ProductCard product={product} key={product.id} />
                    )
                }
                )}
            </div>
        )
    }
    return (<> No products to show  </>)

}

export default ProductsList;