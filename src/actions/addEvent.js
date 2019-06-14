import request from 'superagent'

export const EVENT_ADDED = 'EVENT_ADDED';

const eventAdded = (events) => ({
    type: EVENT_ADDED,
    payload: {
      events: events.events,
      total: events.total,
    }  
})

export const addEvent = (event) => (dispatch) => {
  console.log('addEvent')
 const { userToken, name, picture, description, start_time, end_time } = event
 return request
  .post('http://localhost:4000/add-event')
  .send({name, picture, description, start_time, end_time})
  .set('Authorization', `Bearer ${userToken}`)
  .then(res => {
    dispatch(eventAdded(res.body))
  })
  .catch(console.error)
}


