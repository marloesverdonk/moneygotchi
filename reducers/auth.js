import { LOGIN_SUCCESS } from "../actions/auth";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};