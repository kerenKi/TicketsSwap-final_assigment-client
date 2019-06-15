import { TICKETS_FETCHED } from "../actions/loadTickets";
import { TICKET_ADDED } from "../actions/addTicket";


export default function tickets (state= {tickets:[],risks:[]}, action) {
  switch (action.type) {
    case TICKETS_FETCHED:
      return action.payload 
    case TICKET_ADDED:
      return action.payload   
    default:
      return state  
  }
}