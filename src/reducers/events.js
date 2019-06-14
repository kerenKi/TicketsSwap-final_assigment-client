import { EVENTS_FETCHED } from "../actions/loadEvents";
import { EVENT_ADDED } from "../actions/addEvent";


export default function events (state= [], action) {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events 
    case EVENT_ADDED:
      return action.events  
    default:
      return state  
  }
}