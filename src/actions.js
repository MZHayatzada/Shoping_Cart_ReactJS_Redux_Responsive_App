import { ADD_ITEM, CLEAR_CART, REMOVE_ITEM } from "./constants";
export const removeItem = (id) => {
    return { type: REMOVE_ITEM, payload: id }
};

export const clearCart = () => {
    return { type: CLEAR_CART }
}

export const increaseItem = (id) => {
    return { type: ADD_ITEM, payload: id }
}