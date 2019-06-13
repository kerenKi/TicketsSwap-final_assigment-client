
import { TICKET_FETCHED } from "../actions/loadTicket";


export default function currentTicket (state= {}, action) {
  switch (action.type) {
    case TICKET_FETCHED:
      return {
        id: action.ticket.id,
        title: action.ticket.title,
        picture: action.ticket.picture,
        description: action.ticket.description,
        price: action.ticket.price,
        event_id: action.ticket.event_id,
        user_id: action.ticket.user_id,
        event_name: action.ticket.event.name,
        user_name: action.ticket.user.user_name
      }
    default:
      return state  
  }
}

