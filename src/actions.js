import { ADD_ITEM, CALCULATE_TOTAL, CLEAR_CART, DECREASE_ITEM, REMOVE_ITEM } from "./constants";
export const removeItem = (id) => {
    return { type: REMOVE_ITEM, payload: id }
};

export const clearCart = () => {
    return { type: CLEAR_CART }
}

export const increaseItem = (id) => {
    return { type: ADD_ITEM, payload: id }
}

export const decreaseItem = (id, singleAmount) => {
    return { type: DECREASE_ITEM, payload: { id, singleAmount } }
}
export const calculateTotal = () => {
    return { type: CALCULATE_TOTAL }
}