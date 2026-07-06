import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {

   return (

       <>

           <Navbar />

           <hr/>

           <Routes>

               <Route
                   path="/"
                   element={<Home />}
               />

               <Route
                   path="/products"
                   element={<Products />}
               />

               <Route
                   path="/products/:id"
                   element={<ProductDetails />}
               />

               <Route
                   path="/categories"
                   element={<Categories />}
               />

               <Route
                   path="/cart"
                   element={<Cart />}
               />

               <Route
                   path="/about"
                   element={<About />}
               />

               <Route
                   path="*"
                   element={<NotFound />}
               />

           </Routes>

           <Footer />

       </>

   );

}
