import request from 'superagent'

export const TICKET_FETCHED = 'TICKET_FETCHED'

const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  ticket
})

export const loadTicket = (id) => dispatch => {
  request
    .get(`http://localhost:4000/tickets/${id}`)
    .then(res => {
      dispatch(ticketFetched(res.body))
    })
    .catch(console.error)
}
