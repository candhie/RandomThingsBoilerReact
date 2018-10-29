import constant from '../actions/constant';
import { combineReducers } from 'redux';

const initialState = {
	user: {},
	token: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.CREATE_USER:
      return Object.assign({}, state, {
        user: action.user
      });
    case constant.UPDATE_USER:
      return Object.assign({}, state, {
        user: action.user
      });  
    default:
      return state;
  }
}

export default userReducer;
