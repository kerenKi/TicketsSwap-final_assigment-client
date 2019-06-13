import React from 'react';
import { Link } from 'react-router-dom'

function EventsList(props) {
    const { events } = props
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
        </div>)
    }
    
    
    export default EventsList;