import request from 'superagent'

export const USER_LOGGED = 'USER_LOGGED'

const userToken = (token) => ({
  type: USER_LOGGED,
  payload: token
})

export const loginUser = (user) => dispatch => {
  return request
  .post('http://localhost:4000/logins')
  .send({
    password: user.password,
    email: user.email
  })
  .then(response => {
    dispatch(userToken(response.body))
  })
  .catch(console.error)
}

