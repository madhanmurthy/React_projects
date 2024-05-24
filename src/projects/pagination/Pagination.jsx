import React, { useEffect, useState } from "react";
import "./pagination.css";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
      setOriginalProducts(data.products);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const handleChange = (e) => {
    const searchValues = e.target.value.toLowerCase().trim();

    if (searchValues === "") {
      setProducts(originalProducts);
    } else {
      const filteredProducts = originalProducts.filter((product) =>
        product.title.toLowerCase().includes(searchValues)
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <>
      <div className="search">
        <label htmlFor="" className="search__label">
          Search Products :{" "}
        </label>
        <input type="text" className="search__input" onChange={handleChange} />
      </div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((product) => {
            return (
              <span className="products__single" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span onClick={() => selectedPageHandler(page - 1)}>◀️</span>
          {[...Array(Math.ceil(products.length / 10))].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectedPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span onClick={() => selectedPageHandler(page + 1)}>▶️</span>
        </div>
      )}
    </>
  );
}

export default Pagination;
