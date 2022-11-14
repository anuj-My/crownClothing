import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  const categoriesMap = categories.map((category) => {
    return <CategoryItem key={category.id} category={category} />;
  });
  return <div className="directory-container">{categoriesMap}</div>;
};

export default Directory;
