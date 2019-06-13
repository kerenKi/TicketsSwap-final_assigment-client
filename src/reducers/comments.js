import { COMMENTS_FETCHED } from "../actions/loadComments";
import { COMMENT_ADDED } from "../actions/addComment";


export default function comments (state= [], action) {
  switch (action.type) {
    case COMMENTS_FETCHED:
      return action.comments 
    case COMMENT_ADDED:
      return action.comments  
    default:
      return state  
  }
}