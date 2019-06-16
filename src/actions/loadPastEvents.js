import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const eventsFetched = (events,offset) => ({
  type: EVENTS_FETCHED,
  payload: {
    events: events.events,
    total: events.total,
    limit: 5,
    offset
  }
})

export const loadPastEvents = (offset) => dispatch => {
  request
    .get('http://localhost:4000/past-events')
    .query({ limit: 5, offset })
    .then(res => {
      dispatch(eventsFetched(res.body, offset))
    })
    .catch(console.error)
}
