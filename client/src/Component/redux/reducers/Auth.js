import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, };
    case actionType.LOGOUT:
      localStorage.removeItem('profile')
      return { ...state, authData: null };

    case actionType.ERROR_AUTH_SIGNUP:
      return { ...state, errorAuthSignUp: action.payload.errorAuthSignUp };

    case actionType.ERROR_AUTH_SIGNIN:
      return { ...state, errorAuthSignIn: action.payload.errorAuthSignIn };

    case actionType.FETCH_SINGLEUSER:
      return { ...state, AsingleUser: action.payload.singleUser };

    case actionType.UPDATE_SINGLE_USER:
      return { ...state, AsingleUser: action.payload.updateSingleUser };

    case actionType.DELETE_USER:
      // localStorage.removeItem('profile')
      return { ...state, deleteUserMessage: action.payload };
    default:
      return state;
  }
};

export default authReducer;