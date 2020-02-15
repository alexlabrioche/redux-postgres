import * as types from '../constants';

const initialState = {
  isAuth: false,
  user: {},
};

export default function login(state = initialState, action) {
  console.log('action action action', action);

  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {
        isAuth: action.payload ? true : false,
        user: action.payload,
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        isAuth: action.payload ? true : false,
        user: action.payload,
      };
    case types.LOGIN_REQUEST:
      return {
        isAuth: true,
        user: action.payload,
      };
    case types.LOGIN_SUCCESS:
      return {
        isAuth: true,
        user: action.payload,
      };
    case types.LOGIN_ERROR:
      return {};
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
}
