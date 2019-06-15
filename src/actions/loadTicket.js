import request from 'superagent'

export const TICKET_FETCHED = 'TICKET_FETCHED'
export const RISK_CALCULATED = 'RISK_CALCULATED'


const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  ticket
})

const riskCalcilated = risk => ({
  type: RISK_CALCULATED,
  risk
})

export const loadTicket = (id) => dispatch => {
  request
    .get(`http://localhost:4000/tickets/${id}`)
    .then(res => {
      dispatch(ticketFetched(res.body.ticket))
      dispatch(riskCalcilated(res.body.risk))
    })
    .catch(console.error)
}
