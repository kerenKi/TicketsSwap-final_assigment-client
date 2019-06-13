import { COMMENTS_FETCHED } from "../actions/loadComments";


export default function comments (state= [], action) {
  switch (action.type) {
    case COMMENTS_FETCHED:
      return action.comments 
    default:
      return state  
  }
}