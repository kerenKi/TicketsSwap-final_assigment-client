import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  payload: {
    events: events.events,
    total: events.total,
    limit: 6,
    offset: 0
  }
})

export const loadEvents = () => dispatch => {
  request
    .get('http://localhost:4000/events')
    .query({ limit: 6 })
    .then(res => {
      dispatch(eventsFetched(res.body))
    })
    .catch(console.error)
}
