import { REMOVE_ITEM } from "./constants";
export const removeItem = (id) => {
    return { type: REMOVE_ITEM, payload: id }
};