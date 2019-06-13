import request from 'superagent'

export const COMMENT_ADDED = 'COMMENT_ADDED';

const commentAdded = (comments) => ({
    type: COMMENT_ADDED,
    comments
})

export const addComment = (comment) => (dispatch,getState) => {
 const { userToken, text, ticket_id } = comment
 return request
  .post('http://localhost:4000/add-comment')
  .send({text, ticket_id})
  .set('Authorization', `Bearer ${userToken}`)
  .then(res => {
    dispatch(commentAdded(res.body.comments))
  })
  .catch(console.error)
}
