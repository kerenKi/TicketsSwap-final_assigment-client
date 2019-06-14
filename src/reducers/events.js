import { EVENTS_FETCHED } from "../actions/loadEvents";
import { EVENT_ADDED } from "../actions/addEvent";


export default function events (state= {}, action) {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.payload 
    case EVENT_ADDED:
      return {...state, events: action.payload.events, total: action.payload.total} 
    default:
      return state  
  }
}