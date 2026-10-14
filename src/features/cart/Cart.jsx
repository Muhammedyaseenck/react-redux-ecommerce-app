import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} height="60" />
          <span>{item.title}</span>
          <div className="qty-controls">
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          </div>
          <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <h3>Total: ₹{total.toFixed(2)}</h3>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;