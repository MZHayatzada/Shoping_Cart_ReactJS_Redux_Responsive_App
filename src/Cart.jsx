import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCart from "./SingleCart";
import { connect } from "react-redux";
import { clearCart } from "./actions";
const Cart = ({ cart = [], clearCart }) => {
 

  return (
    <div>
      <main className="page">
        <section className="shopping-cart dark">
          <div className="container">
            <div className="block-heading">
              <h2>Shopping Cart</h2>
              <p>A-One Mobile Private Ltd.</p>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="items">
                  {cart.length===0 ? <h1 className='text-center'>Cart is Empty</h1>: cart.map((item) => {
                      return (
                        <SingleCart key={item.id} item={item}></SingleCart>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="summary">
                    <h3>Summary</h3>
                    <div className="summary-item">
                      <span className="text">Subtotal</span>
                      <span className="price">$0</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Discount</span>
                      <span className="price">$0</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Shipping</span>
                      <span className="price">$0</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Total</span>
                      <span className="price">$0</span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Checkout
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                      onClick = {()=>clearCart()}
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (store)=>{
  const {cart} = store;
  return {cart}
}

const mapDispatchToProps = (dispatch)=>{
    return {
      clearCart:()=>dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
