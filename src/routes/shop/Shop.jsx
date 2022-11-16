import { ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const shopDataMap = products.map((product) => {
    return <ProductCard product={product} key={product.id} />;
  });
  return <div className="products-container">{shopDataMap}</div>;
};

export default Shop;
