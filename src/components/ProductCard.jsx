import { Link } from "react-router-dom";
import { useContext } from "react";

import CartContext from "../contexts/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: 15,
        marginBottom: 15,
      }}
    >
      <h1>{product.image}</h1>

      <h2>{product.name}</h2>

      <p>{product.category}</p>

      <p>₹{product.price}</p>

      <p>Stock : {product.stock}</p>

      <button onClick={() => addToCart(product)}>Add To Cart</button>

      <br />
      <br />

      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}
