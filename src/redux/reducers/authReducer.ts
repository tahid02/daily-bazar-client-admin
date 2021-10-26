import { AuthAction } from 'redux/actions/authAction';
import { IAuthData } from 'types';
import { ActionType } from 'redux/actionTypes';

interface IAuthState {
  data: IAuthData | null;
  status: 'idle' | 'pending' | 'success' | 'error';
  error: null | string;
}

const initialState: IAuthState = {
  data: null,
  status: 'idle',
  error: null,
};
export const authReducer = (
  state: IAuthState = initialState,
  action: AuthAction
): IAuthState => {
  switch (action.type) {
    case ActionType.LOG_IN_SUCCESS:
      return {
        data: action.payload,
        status: 'success',
        error: null,
      };
    case ActionType.LOG_IN_PENDING:
      return {
        data: null,
        status: 'pending',
        error: null,
      };
    case ActionType.LOG_IN_ERROR:
      return {
        data: null,
        status: 'error',
        error: null,
      };

    case ActionType.LOG_OUT:
      return initialState;

    default:
      return state;
  }
};
