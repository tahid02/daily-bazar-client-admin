import { IProduct } from 'types';
import { ActionType } from 'redux/actionTypes';
import { CartAction } from 'redux/actions/cartAction';

export const addToCart = (payload: IProduct): CartAction => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};
export const removeFromCart = (id: string): CartAction => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload: id,
  };
};
export const clearTheCart = (): CartAction => {
  return {
    type: ActionType.CLEAR_THE_CART,
    // payload:"" // error , because this function will return as CartAction schema where IClearTheCart has no payload
  };
};
