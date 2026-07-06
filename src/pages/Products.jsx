import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

import products from "../data/products";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>

      <SearchBar />

      <br />

      <CategoryFilter />

      <br />

      <ProductList products={products} />

      <Pagination />
    </div>
  );
}
