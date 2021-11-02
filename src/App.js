import "./App.css";
import Cart from "./Cart";
import { createStore } from "redux";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { CLEAR_CART, REMOVE_ITEM } from "./constants";

const cartItems = [
  {
    image: "/images/image.jpg",
    name: "iPhone 4s",
    price: 120,
    size: "5 inch",
    ram: "4GB",
    storage: "32GB",
    id: 1,
    singleAmount: 0,
  },
  {
    image: "/images/5s.jpg",
    name: "iPhone 5s",
    price: 180,
    size: "7 inch",
    ram: "6GB",
    storage: "64GB",
    id: 2,
    singleAmount: 0,
  },
  {
    image: "/images/6s.jpg",
    name: "iPhone 6s",
    price: 240,
    size: "8 inch",
    ram: "8GB",
    storage: "128GB",
    id: 3,
    singleAmount: 0,
  },
];
const initialState = {
    cart: cartItems,
    totalPrice: 0,
    cartQuantity:0
};

const reducer = (state, action) => {
  if(action.type===REMOVE_ITEM){
    return {
      ...state,
      cart:state.cart.filter((eachItem)=>{
        return eachItem.id!==action.payload
      })
    }
  }
  if(action.type===CLEAR_CART){
    return{
      ...state,
      cart:[]
    }
  }
  return state
};

const store = createStore(reducer,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <Cart></Cart>
    </Provider>
  );
}

export default App;
