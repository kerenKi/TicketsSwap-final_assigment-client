import { USER_LOGGED } from "../actions/login";
import { USER_SIGENDUP } from "../actions/signup";


export default function userLogedIn (state= {}, action) {
  switch (action.type) {
    case USER_LOGGED:
      return action.payload  
    case USER_SIGENDUP:
      return action.payload 
    default:
      return state  
  }
}