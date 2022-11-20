import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./product-card.styles.js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  Footer,
  Name,
  Price,
  Image,
  ProductCardContainer,
} from "./product-card.styles.js";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
