import { useEffect, useState } from "react"
import { Product } from "../../interfaces/Product"
import { useProdcutsContext } from "../../context/ProductsContext"
import { useParams } from "react-router-dom"
import { formatCurrency } from "../../utilities/formateCurrency"
import { useCartContext } from "../../context/CartContext"



const ProductDetials = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<Product>()
    const { getProduct } = useProdcutsContext()
    const { addItem } = useCartContext()

    console.log(id)
    const handleFetchProduct = async (id: number) => {
        const data = await getProduct(id)
        setProduct(data)
    }

    useEffect(() => {
        if (id) {
            handleFetchProduct(+id)
        }
    }, [])

    if (!product) return (<> ...loading </>)
    return (
        <div className=" d-flex justify-content-between bg-light " >
            <div>
                <div className="row">
                    <div className="col-md-5 ">
                        <img src={product.thumbnail} alt={product.title} style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="col-md-6 offset-md-1"> <h1 className="text-info text-center"> {product.title}</h1>
                        <table className="table ">
                            <tbody>
                                <tr>
                                    <th> Brand </th>
                                    <td>  {product.brand} </td>
                                </tr>
                                <tr>
                                    <th> Rating </th>
                                    <td>  {product.rating} </td>
                                </tr>
                                <tr>
                                    <th> Category </th>
                                    <td>  {product.category} </td>
                                </tr>
                                <tr>
                                    <th> Price </th>
                                    <td>  {formatCurrency(product.price)} </td>
                                </tr>
                                <tr>
                                    <th> Discount </th>
                                    <td> % {product.discountPercentage} </td>
                                </tr>
                            </tbody>
                        </table>

                        <button className="btn btn-outline-dark btn-block" onClick={() => addItem({ id: product.id, quantity: 1, title: product.title, thumbnail: product.thumbnail })}> Add to cart </button>
                    </div>

                </div>
            </div>
        </div>

    )

}
export default ProductDetials