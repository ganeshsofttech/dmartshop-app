export default function CartItem({
  item,

  increaseQuantity,

  decreaseQuantity,

  removeItem,
}) {
  return (
    <div
      style={{
        border: "1px solid gray",

        padding: 15,

        marginBottom: 15,
      }}
    >
      <h2>{item.name}</h2>

      <p>₹{item.price}</p>

      <p>Quantity : {item.quantity}</p>

      <button onClick={() => decreaseQuantity(item.id)}>-</button>

      <button onClick={() => increaseQuantity(item.id)}>+</button>

      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
}
