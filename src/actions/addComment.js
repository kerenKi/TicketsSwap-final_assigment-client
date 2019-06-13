import request from 'superagent'

export const COMMENT_ADDED = 'COMMENT_ADDED';

const commentAdded = (comment) => ({
    type: COMMENT_ADDED,
    comment
})

export const addComment = (data) => (dispatch,getState) => {
  dispatch(commentAdded('hi'))
  // if (data) {
  // const jwt = getState().currentUser
  //       //post request to url/events
  //   return request
  //     .post(`${baseUrl}/events`)
  //     //body of the request is data (the info about the new event)
  //     .send(data)
  //     .set('Authorization', `Bearer ${jwt}`)
  //     .then( response => {
  //       //dispatching the response to redux store
  //       dispatch(eventCreateSuccess(response.body))
  //     })
  //     .catch(console.error)}
}
