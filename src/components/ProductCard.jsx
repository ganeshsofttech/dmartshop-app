import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  addToCart,
}) {
  return (
    <div
      style={{
        border: "1px solid gray",

        padding: 20,

        marginBottom: 20,
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
