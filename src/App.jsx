import { useState } from "react";
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

import CartContext from "./contexts/CartContext";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,

                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    } else {
      setCart([
        ...cart,

        {
          ...product,

          quantity: 1,
        },
      ]);
    }
  }

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,

              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart

        .map((item) =>
          item.id === id
            ? {
                ...item,

                quantity: item.quantity - 1,
              }
            : item,
        )

        .filter((item) => item.quantity > 0),
    );
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider
      value={{
        cart,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        removeItem,
      }}
    >
      <Navbar />

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </CartContext.Provider>
  );
}
