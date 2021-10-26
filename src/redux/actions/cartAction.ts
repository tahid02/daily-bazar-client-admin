import { IProduct } from 'types';
import { ActionType } from 'redux/actionTypes';

interface IAddToCart {
  type: ActionType.ADD_TO_CART;
  payload: IProduct;
}
interface IRemoveFromCart {
  type: ActionType.REMOVE_FROM_CART;
  payload: string;
}
interface IClearTheCart {
  type: ActionType.CLEAR_THE_CART;
}

export type CartAction = IAddToCart | IRemoveFromCart | IClearTheCart;

// export type CartAction =
//   | ReturnType<typeof addToCart>
//   | ReturnType<typeof removeFromCart>
//   | ReturnType<typeof clearTheCart>;

// Output of type CartAction while hovering over it
//  type CartAction = {
//     type: ActionType; // but here we want type:"add_to_cart"
//     payload: IProduct;
// } | {
//     type: ActionType; // but here we want type:"remove_from_cart"
//     payload: String;
// } | {
//     type: ActionType; // but here we want type:"clear_the_cart"  because ts inferring all's
// type as "ActionType", so , we will do it manually by interface in actionTypes folder
//     payload: string;
// }
