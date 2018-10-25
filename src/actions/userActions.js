
// CRUD
// Action Logic For User
import constant from './constant';

export function addUser(user) {
  // Call Ajax for Create
  return {
    type: constant.CREATE_USER,
    user
  }
}