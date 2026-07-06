import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {

   const { id } = useParams();

   const product = products.find(
       p => p.id === Number(id)
   );

   if (!product)
       return <h2>Product Not Found</h2>;

   return (

       <div>

           <h1>{product.name}</h1>

           <h3>Category : {product.category}</h3>

           <h3>Price : ₹{product.price}</h3>

       </div>

   );

}
