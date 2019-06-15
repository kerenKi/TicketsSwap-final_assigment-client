import request from 'superagent'

export const TICKETS_FETCHED = 'TICKETS_FETCHED'

const ticketsFetched = (tickets, risks) => ({
  type: TICKETS_FETCHED,
  payload:{
    tickets,
    risks
  } 
})

export const loadTickets = (id) => dispatch => {
  request
    .post('http://localhost:4000/tickets')
    .send({ event_id: id })
    .then(res => {
      dispatch(ticketsFetched(res.body.tickets,res.body.risks))
    })
    .catch(console.error)
}

