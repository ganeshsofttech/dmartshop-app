import { NavLink } from "react-router-dom";
import { useContext } from "react";

import CartContext from "../contexts/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,

    0,
  );

  const activeStyle = {
    color: "red",

    fontWeight: "bold",
  };

  return (
    <nav>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : {})}>
        Home
      </NavLink>

      {" | "}

      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Products
      </NavLink>

      {" | "}

      <NavLink
        to="/categories"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Categories
      </NavLink>

      {" | "}

      <NavLink
        to="/cart"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Cart ({totalItems})
      </NavLink>

      {" | "}

      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        About
      </NavLink>
    </nav>
  );
}
