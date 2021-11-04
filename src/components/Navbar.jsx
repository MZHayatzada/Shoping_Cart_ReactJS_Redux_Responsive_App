import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import "./navCss.css";
const Navbar = ({cart,cartQuantity,totalOfEachItem}) => {
   
  return (
    <div className="row">
      <div className="col-lg-12 col-sm-12 col-12">
        <div className="dropdown">
          <button type="button" className="btn btn-info" data-toggle="dropdown">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
            <span className="badge badge-pill badge-danger">{cartQuantity}</span>
          </button>
          <div className="dropdown-menu">
            <div className="row total-header-section">
              <div className="col-lg-6 col-sm-6 col-6">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span className="badge badge-pill badge-danger">{cartQuantity}</span>
              </div>
              <div className="col-lg-6 col-sm-6 col-6 total-section text-right">
                <p>
                  Total: <span className="text-info">$0</span>
                </p>
              </div>
            </div>
            {cart.map((singleItem,index) => {
              const { image, name, price, singleAmount } = singleItem;
              return (
                <div key={index} className="row cart-detail">
                  <div className="col-lg-4 col-sm-4 col-4 cart-detail-img">
                    <img src={image} />
                  </div>
                  <div className="col-lg-8 col-sm-8 col-8 cart-detail-product">
                    <p>{name}..</p>
                    <span className="price text-info"> ${price}</span>{" "}
                    <span className="count"> Quantity:{singleAmount}</span>
                  </div>
                </div>
              );
            })}

            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12 text-center checkout">
                <button className="btn btn-primary btn-block">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (store)=>{
    const {cart} = store;
    const singleAmountValues = cart.map((item)=>{
        return item.singleAmount;
    })
    let cartQuantity = singleAmountValues.reduce((acc,curr)=>{
        return acc+curr;
    },0)
    return {cart,cartQuantity}
}

export default connect(mapStateToProps)(Navbar);
