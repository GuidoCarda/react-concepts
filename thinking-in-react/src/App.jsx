/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((p) => {
    const nameMatches =
      !filterText || p.name.toLowerCase().includes(filterText);
    const isStocked = !inStockOnly || p.stocked;
    return nameMatches && isStocked;
  });

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={filteredProducts}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <div style={{ marginBlock: "2rem" }}>
      <input
        type="text"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value.toLowerCase())}
      />
      <label style={{ display: "block" }}>
        <input
          id="hasStock"
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </div>
  );
};

const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table border="1" width={300}>
      <thead>
        <tr>
          <td>name</td>
          <td>price</td>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
};

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <td colSpan="2" align="center">
        {category}
      </td>
    </tr>
  );
};

const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default App;
