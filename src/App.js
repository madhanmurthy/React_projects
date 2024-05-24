import { useEffect, useReducer } from "react";
import "./App.css";
import Products from "./projects/cart/Products";
import axios from "axios";
import { cartReducer } from "./projects/cart/reducers/cartReducer";
import Cart from "./projects/cart/Cart";
// import Pagination from './projects/pagination/Pagination';
// import TrafficLight from './projects/trafficlight/TrafficLight';

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app">
      {/* <TrafficLight /> */}
      {/* <Pagination /> */}
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
