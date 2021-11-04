import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART, DECREASE_ITEM, TOTAL_PRICE, CALCULATE_TOTAL } from "./constants";

export const reducer = (state, action) => {
    if (action.type === REMOVE_ITEM) {
        return {
            ...state,
            cart: state.cart.filter((eachItem) => {
                return eachItem.id !== action.payload;
            }),
        };
    }
    if (action.type === CLEAR_CART) {
        return {
            ...state,
            cart: [],
        };
    }
    if (action.type === ADD_ITEM) {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                cartItem = {...cartItem, singleAmount: cartItem.singleAmount + 1 };
            }
            return cartItem;
        });
        return {
            ...state,
            cart: tempCart,
        };
    }
    if (action.type === DECREASE_ITEM) {
        if (action.payload.singleAmount < 2) {
            return {
                ...state,
                cart: state.cart.filter((item) => {
                    console.log(item.id);
                    return item.id !== action.payload.id
                })
            }
        } else {
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        item = {...item, singleAmount: item.singleAmount - 1 }
                    }
                    return item
                })
            }
        }
    }

    if (action.type === CALCULATE_TOTAL) {
        let totalOfEachItem = state.cart.map((cartItem) => {
            console.log(cartItem.singleAmount * cartItem.price);
            return cartItem.singleAmount * cartItem.price;
        })
        state.totalPrice = totalOfEachItem.reduce((acc, curr) => {
            return acc + curr
        }, 0)
        return {...state, totalPrice: state.totalPrice }
    }

    return {...state };
};