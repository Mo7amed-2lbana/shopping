import ProductCard from "./components/productCard/ProductCard";
import { ProductList } from "./data/CardData";

const App = () => {
  const renderProductCard = ProductList.map((product) => (
    <ProductCard product={product} />
  ));
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 md:gap-4 py-4">
          {renderProductCard}
        </div>
      </div>
    </>
  );
};

export default App;
