import Modal from "./UI/Modal";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const totalAmount = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  function hanldeClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  async function checkoutAction(fd) {
    const userData = Object.fromEntries(fd.entries());
    await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: userData,
        },
      })
    );
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={hanldeClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Successfully sent the order!</h2>
        <p>Thank you for your order!</p>
        <p>You will receive an email confirmation shortly.</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Close</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={hanldeClose}>
      <form action={checkoutAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>
        <Input id="name" label="Your Name" type="text" />
        <Input id="email" label="Your Email" type="email" />
        <Input id="street" label="Street" type="text" />
        <div className="control-row">
          <Input id="postal-code" label="Postal Code" type="text" />
          <Input id="city" label="City" type="text" />
        </div>
        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
