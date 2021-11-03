import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { decreaseItem, increaseItem, removeItem } from "./actions";

const SingleCart = ({ item, increase, decrease, remove, cartQuantity }) => {
  const { image, name, price, ram, storage, size, singleAmount, id } = item;
    
  return (
    <div>
      <div className="product" key={id}>
        <div className="row">
          <div className="col-md-3">
            <img className="img-fluid mx-auto d-block image" src={image} />
          </div>
          <div className="col-md-8">
            <div className="info">
              <div className="row">
                <div className="col-md-5 product-name">
                  <div className="product-name">
                    <a href="#"> {name} </a>
                    <div className="product-info">
                      <div>
                        <span className="value">{size}</span>
                      </div>
                      <div>
                        RAM: <span className="value"> {ram} </span>
                      </div>
                      <div>
                        <span className="value"> {storage} </span>
                      </div>
                      <div>
                        <button
                          className="btn btn-link btn-remove"
                          onClick={() => remove()}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 quantity">
                  <label htmlFor="quantity">Quantity:</label>
                  <div className="d-flex justify-content-around align-items-baseline">
                    <button className="btn btn-dark" onClick={() => increase()}>
                      +
                    </button>
                    <p> {singleAmount} </p>
                    <button
                      className="btn btn-dark "
                      onClick={() => decrease()}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="col-md-3 price">
                  <span>$ 0 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    const {item} = ownProps;
    const {id} = item;
    return {
        remove: ()=>dispatch(removeItem(id)),
        increase: ()=>dispatch(increaseItem(id)),
        decrease: ()=>dispatch(decreaseItem(id)),
    }
}

export default connect(null,mapDispatchToProps)(SingleCart);
