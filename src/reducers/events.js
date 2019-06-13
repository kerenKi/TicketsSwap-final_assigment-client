import { EVENTS_FETCHED } from "../actions/loadEvents";


export default function events (state= [], action) {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events 
    default:
      return state  
  }
}