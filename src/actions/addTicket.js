import request from 'superagent'

export const TICKET_ADDED = 'TICKET_ADDED';

const ticketAdded = (tickets) => ({
    type: TICKET_ADDED,
    tickets
})

export const addTicket = (ticket) => (dispatch) => {
 const { userToken, event_id, title, picture, description, price } = ticket
 return request
  .post('http://localhost:4000/add-ticket')
  .send({event_id, title, picture, description, price})
  .set('Authorization', `Bearer ${userToken}`)
  .then(res => {
    dispatch(ticketAdded(res.body.tickets))
  })
  .catch(console.error)
}
