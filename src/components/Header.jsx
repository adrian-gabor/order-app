import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalItems = cartCtx.items.reduce((totalItems, item) => {
    return totalItems + item.quantity;
  }, 0);

  function showCartHandler() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly onClick={showCartHandler}>
          Cart ({totalItems})
        </Button>
      </nav>
    </header>
  );
}
