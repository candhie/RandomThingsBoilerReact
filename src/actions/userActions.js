
// CRUD
// Action Logic For User
import constant from './constant';

export const addUser = (user) => {
  // Call Ajax for Create
  return {
    type: constant.CREATE_USER,
    user
  }
}

export const updateUser = (user) => {
  // Call Ajax for Update
  return {
    type: constant.UPDATE_USER,
    user
  }
}