import { TICKETS_FETCHED } from "../actions/loadTickets";


export default function tickets (state= [], action) {
  switch (action.type) {
    case TICKETS_FETCHED:
      return action.tickets 
    default:
      return state  
  }
}