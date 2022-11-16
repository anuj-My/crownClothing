import "./cart-dropdown.styles.scss";
import Button from "../button/Button";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
const CartDropdown = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
