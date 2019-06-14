import { RISK_CALCULATED } from "../actions/loadTicket";

export default function risk (state= [], action) {
  switch (action.type) {
    case RISK_CALCULATED:
      return action.risk  
    default:
      return state  
  }
}