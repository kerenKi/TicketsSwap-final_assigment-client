import { combineReducers } from 'redux'
import userLogedIn from './login'
import events from './events'
import tickets from './tickets'

export default combineReducers ({
    userLogedIn,
    events,
    tickets
})