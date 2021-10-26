import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
export const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
