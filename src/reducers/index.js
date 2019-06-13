import { combineReducers } from 'redux'
import userLogedIn from './login'
import events from './events'
import tickets from './tickets'
import currentTicket from './currentTicket'
import comments from './comments'

export default combineReducers ({
    userLogedIn,
    events,
    tickets,
    currentTicket,
    comments
})