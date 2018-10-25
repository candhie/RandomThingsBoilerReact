import constant from '../actions/constant';

let initialState = {
  user: {},
  isActive: false,
  token: '',
};

function createUser(state = initialState, action) {
  switch (action.type) {
    case constant.CREATE_USER:
      return Object.assign({}, state, {
        user: action.user
      });

    default:
      return state;
  }
}

function updateUser(state = initialState, action) {
  switch (action.type) {
    case constant.UPDATE_USER:
      return Object.assign({}, state, {
        user: action.user
      });

    default:
      return state;
  }
}

// it can
export default createUser;