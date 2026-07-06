import { Link } from "react-router-dom";

export default function ProductCard({ product }) {

   return (

       <div
           style={{
               border: "1px solid gray",
               padding: "15px",
               marginBottom: "15px"
           }}
       >

           <h1>{product.image}</h1>

           <h2>{product.name}</h2>

           <p>Category : {product.category}</p>

           <p>Price : ₹{product.price}</p>

           <p>Stock : {product.stock}</p>

           <Link to={`/products/${product.id}`}>
               View Details
           </Link>

       </div>

   );

}
