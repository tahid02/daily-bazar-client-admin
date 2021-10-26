import { IAuthData } from 'types';
import { ActionType } from 'redux/actionTypes';
interface ILogInSuccessAction {
  type: ActionType.LOG_IN_SUCCESS;
  payload: IAuthData;
}
interface ILogInPendingAction {
  type: ActionType.LOG_IN_PENDING;
}
interface ILogInErrorAction {
  type: ActionType.LOG_IN_ERROR;
  payload: string; // here we will dispatch error message in payload  if authentication (calling in redux thunk) failed
}
interface ILogOutAction {
  type: ActionType.LOG_OUT;
}

export type AuthAction = ILogInErrorAction | ILogInPendingAction | ILogInSuccessAction | ILogOutAction;
