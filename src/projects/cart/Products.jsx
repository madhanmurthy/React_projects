import React from "react";
import "./Products.css";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <>
      <div className="products">
        {products.map((prod) => {
          return (
            <div key={prod.id} className="products__single">
              <img
                src={prod.thumbnail}
                alt={prod.title}
                style={{ height: 200, objectFit: "cover" }}
              />
              <div className="product__detail">
                <span>{prod.title}</span>
                <span>${prod.price}</span>
              </div>
              {cart.some((p) => p.id === prod.id) ? (
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
                  }
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: {
                        id: prod.id,
                        title: prod.title,
                        thumbnail: prod.thumbnail,
                        qty: prod.qty,
                        price: prod.price,
                      },
                    })
                  }
                >
                  Add to cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
