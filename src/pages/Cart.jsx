import { useContext } from "react";

import CartContext from "../contexts/CartContext";

import CartItem from "../components/CartItem";

export default function Cart() {
  const {
    cart,

    increaseQuantity,

    decreaseQuantity,

    removeItem,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,

    0,
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
          />
        ))
      )}

      <hr />

      <h2>Total Price : ₹{totalPrice}</h2>
    </div>
  );
}
