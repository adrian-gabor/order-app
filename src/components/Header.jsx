import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './Button';
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx =  useContext(CartContext);

 const totalItems = cartCtx.items.reduce((totalItems, item) => {
    return totalItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
      <img src={logo} alt="logo" />
      <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly >Cart ({totalItems})</Button>
      </nav>
    </header>
  );
}