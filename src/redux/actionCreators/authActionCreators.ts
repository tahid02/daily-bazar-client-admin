import { AuthAction } from 'redux/actions/authAction';
import { ActionType } from 'redux/actionTypes';
import AuthService from 'services/AuthService';
import { Dispatch } from 'react';

export const login = (payload: { email: string; password: string }) => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: ActionType.LOG_IN_PENDING,
    });
    AuthService.login(payload)
      .then((data) => {
        dispatch({
          type: ActionType.LOG_IN_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.LOG_IN_ERROR,
          payload: err?.response?.data?.message,
        });
      });
  };
};

export const logout = (): AuthAction => {
  return {
    type: ActionType.LOG_OUT,
  };
};
