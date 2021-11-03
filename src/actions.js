import { ADD_ITEM, CLEAR_CART, DECREASE_ITEM, REMOVE_ITEM } from "./constants";
export const removeItem = (id) => {
    return { type: REMOVE_ITEM, payload: id }
};

export const clearCart = () => {
    return { type: CLEAR_CART }
}

export const increaseItem = (id) => {
    return { type: ADD_ITEM, payload: id }
}

export const decreaseItem = (id) => {
    return { type: DECREASE_ITEM, payload: id }
}