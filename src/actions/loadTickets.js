import request from 'superagent'

export const TICKETS_FETCHED = 'TICKETS_FETCHED'

const ticketsFetched = tickets => ({
  type: TICKETS_FETCHED,
  tickets
})

export const loadTickets = (id) => dispatch => {
  request
    .post('http://localhost:4000/tickets')
    .send({ event_id: id })
    .then(res => {
      dispatch(ticketsFetched(res.body.tickets))
    })
    .catch(console.error)
}

