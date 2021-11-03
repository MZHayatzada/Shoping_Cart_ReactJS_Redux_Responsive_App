import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART, DECREASE_ITEM } from "./constants";

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

        return {
            ...state,
            cart: state.cart.map((item) => {
                if (item.id === action.payload) {
                    item = {...item, singleAmount: item.singleAmount - 1 }
                }
                return item
            })
        }
    }

    return {...state };
};