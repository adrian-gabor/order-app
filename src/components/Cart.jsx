import Modal from "./UI/Modal";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart({}) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalAmount = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  function closeCartHandler() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart-modal" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onAdd={() => cartCtx.addItem(item)}
            onRemove={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalAmount)}</p>
      <p className="modal-actions">
        <Button onClick={closeCartHandler} textOnly>
          Close
        </Button>
        {cartCtx.items.length > 0 && <Button>Go to Checkout</Button>}
      </p>
    </Modal>
  );
}
