import { USER_LOGGED } from "../actions/login";

export default function userLogedIn (state= {}, action) {
  switch (action.type) {
    case USER_LOGGED:
      return action.payload  
    default:
      return state  
  }
}