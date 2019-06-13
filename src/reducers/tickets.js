import { TICKETS_FETCHED } from "../actions/loadTickets";
import { TICKET_ADDED } from "../actions/addTicket";


export default function tickets (state= [], action) {
  switch (action.type) {
    case TICKETS_FETCHED:
      return action.tickets 
    case TICKET_ADDED:
      return action.tickets  
    default:
      return state  
  }
}