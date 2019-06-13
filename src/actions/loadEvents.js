import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

export const loadEvents = () => (dispatch,getState) => {
  request
    .get('http://localhost:4000/events')
    .then(res => {
      dispatch(eventsFetched(res.body.events))
    })
    .catch(console.error)
}



// if (getState().events) return
//     const jwt = getState().currentUser
//       // GET /events request
//       request(`${baseUrl}/events`)
//       .set('Authorization', `Bearer ${jwt}`)
//       .then(response => {
//           // dispatch an EVENTS_FETCHED action that contains the events
//           dispatch(eventsFetched(response.body))
//       })
//       .catch(console.error)
