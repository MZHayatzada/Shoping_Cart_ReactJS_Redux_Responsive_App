import "./App.css";
import Cart from "./Cart";
import { createStore } from "redux";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { reducer } from "./reducer";
import { cartItems } from "./data";
const initialState = {
  cart: cartItems,
  totalPrice: 0,
  cartQuantity: 0,
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <Cart></Cart>
    </Provider>
  );
}

export default App;
