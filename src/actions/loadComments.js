import request from 'superagent'

export const COMMENTS_FETCHED = 'COMMENTS_FETCHED'

const commentsFetched = comments => ({
  type: COMMENTS_FETCHED,
  comments
})

export const loadComments = (id) => dispatch => {
  request
    .post('http://localhost:4000/comments')
    .send({ ticket_id: id })
    .then(res => {
      dispatch(commentsFetched(res.body.comments))
    })
    .catch(console.error)
}
