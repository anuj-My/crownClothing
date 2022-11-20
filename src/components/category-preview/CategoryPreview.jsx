import "./category-preview.styles.js";
import ProductCard from "../product-card/ProductCard";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles.js";
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title} className="title">
          {title.toUpperCase()}
        </Title>
      </h2>

      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
