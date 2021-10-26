import { CartAction } from './../actions/cartAction';
import { IProduct } from 'types';
import { ActionType } from 'redux/actionTypes';

// export const cartReducer = (state:IProduct[] = [],action:IAction)=>{
export const cartReducer = (state: IProduct[] = [], action: CartAction) => {
  // smart approach for declaring the type of action
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      return [...state, action.payload];
    }

    case ActionType.REMOVE_FROM_CART: {
      const newState = state.filter(
        (product) => product._id !== action.payload
      );
      return newState;
    }

    case ActionType.CLEAR_THE_CART: {
      return [];
    }
    default: {
      return state;
    }
  }
};
