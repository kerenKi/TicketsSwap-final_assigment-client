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
  .catch(error => {
    console.log(error)
    if (error.status === 500) {
      return alert('There seems to be a problem with the server')
    }
    if (error.status === 400) {
      return alert("There is something wrong with your log in. maybe you've entered the wrong password?")
    }
    return alert('Something went wrong, please try again')
  })
}

