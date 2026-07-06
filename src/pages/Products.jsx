import { Link } from "react-router-dom";
import products from "../data/products";

export default function Products() {
   return (
       <div>

           <h1>Products</h1>

           {
               products.map(product => (

                   <div key={product.id}>

                       <h3>{product.name}</h3>

                       <p>₹{product.price}</p>

                       <Link to={`/products/${product.id}`}>
                           View Details
                       </Link>

                       <hr/>

                   </div>

               ))
           }

       </div>
   );
}
