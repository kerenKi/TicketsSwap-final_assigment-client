import React from 'react';
import { Link } from 'react-router-dom'
import EventFormContainer from '../newEventForm'


function EventsList(props) {
    const { events, limit, offset, total, user, onNext, onPrevious } = props
    const eventItems = events && events.map(event => {
        let startTime = new Date(event.start_time)
        const options = { weekday: 'short', year: '2-digit', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'};
        let endTime = new Date(event.end_time)

        return <li key={event.id} className="eventsList">
            <Link to={`/events/${event.id}`} >
                <div>
                <img src={event.picture} alt={event.name}/>
                <p>{event.name}</p>
                <p>{startTime.toLocaleDateString('default', options)} - {endTime.toLocaleDateString('default', options)} </p>
                </div>
            </Link>
        </li>
    })  
    
    return (<div>
        {!events && 'Loading...'}
        <h1>Upcoming events</h1>
        <ul>
        {eventItems}
        </ul>
        <p>Showing {(total - offset) > limit ? limit : (total - offset)} events out of {total}</p>
        {offset > 0 && 
            <button className="eventsListButtons" onClick={onPrevious}>Back to previous events</button>}
        {(offset + limit) < total && 
            <button className="eventsListButtons" onClick={onNext}>next events</button>}

        {!user.jwt && <div className="eventsListNotAMember">
            <h3>Want to promote an event? <br/> 
          Only our members can post events <br/>
          <Link to='/signup'> SIGN UP </Link>  or   
          <Link to='/'> LOG IN </Link></h3>
          </div>}
          {user.jwt && <div className="addEventForm">
              <h1>Want to publish an event?</h1>
              <EventFormContainer/>
              </div>}
        </div>)
    }
    
    
    export default EventsList;