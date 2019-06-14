import React from 'react';
import { Link } from 'react-router-dom'
import EventFormContainer from '../newEventForm'


function EventsList(props) {
    const { events, user } = props
    const eventItems = events && events.map(event => {
        return <li key={event.id}>
            <Link to={`/events/${event.id}`} >
                <div>
                <img src={event.picture} alt={event.name}/>
                <p>{event.name}</p>
                <p>{event.start_time} - {event.end_time} </p>
                </div>
            </Link>
        </li>
    })  
    
    return (<div>
        {!props.events && 'Loading...'}
        <h1>Upcoming events</h1>
        <ul>
        {eventItems}
        </ul>
        {!user.jwt && <h3>Want to promote an event? <br/> 
          Only our members can post events <br/>
          <Link to='/signup'> SIGN UP </Link> or  
          <Link to='/'> LOG IN </Link></h3>}
          {user.jwt && <EventFormContainer/>}
        </div>)
    }
    
    
    export default EventsList;