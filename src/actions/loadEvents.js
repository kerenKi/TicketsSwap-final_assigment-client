import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

export const loadEvents = () => dispatch => {
  request
    .get('http://localhost:4000/events')
    .then(res => {
      dispatch(eventsFetched(res.body.events))
    })
    .catch(console.error)
}
