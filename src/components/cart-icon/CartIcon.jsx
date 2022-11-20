import { useContext } from "react";
import "./cart-icon.styles.js";
import { CartContext } from "../../contexts/CartContext";
import { CartIconContainer, ItemCount } from "./cart-icon.styles.js";
import { ShoppingIcon } from "./cart-icon.styles.js";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
