import { Nav } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { Product } from "../../interfaces/Product";
import { formatCurrency } from "../../utilities/formateCurrency";
import { NavLink } from "react-router-dom";

type props = {
    product: Product

}

const ProductCard = ({ product }: props) => {
    const { id, title, price, rating, thumbnail, description } = product;
    const { addItem } = useCartContext();

    return (
        <div className="col-md-4 col-sm-12 card mt-2  border shadow p-2">
            <img className="card-img-top" src={thumbnail} alt="Card image cap" style={{ height: '250px' }} />
            <div className="card-body">
                <h4 className="text-info"> {title}</h4>
                <p style={{ fontSize: '1.1rem' }}> {description}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <Nav.Link to={`/shopping/${id}`} as={NavLink}>  <button className="btn btn-info"> More details </button></Nav.Link>
                </div>
                <div>
                    <button className="btn btn-danger "> {formatCurrency(price)} </button>
                </div>
            </div>
            <div className="card-footer row">
                <button className="btn btn-primary" onClick={() => addItem({ id, quantity: 1, title, thumbnail, price })} >Add to cart </button>
            </div>

        </div>
    )

}


export default ProductCard;