import request from 'superagent'

export const USER_SIGENDUP = 'USER_SIGENDUP'

const getUserToken = (token) => ({
  type: USER_SIGENDUP,
  payload: token
})

export const signupUser = (user) => dispatch => {
  return request
  .post('http://localhost:4000/users')
  .send({
    user_name: user.user_name,
    password: user.password,
    email: user.email
  })
  .then(response => {
    dispatch(getUserToken(response.body))
  })
  .catch(console.error)
}
