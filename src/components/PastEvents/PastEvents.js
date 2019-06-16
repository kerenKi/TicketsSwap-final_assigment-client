import React from 'react';

function PastEvents(props) {
    const { events, limit, offset, total, onNext, onPrevious } = props
    const eventItems = events && events.map(event => {
        let startTime = new Date(event.start_time)
        const options = { weekday: 'short', year: '2-digit', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'};
        let endTime = new Date(event.end_time)

        return <li key={event.id} className="eventsList">
                <div>
                <img src={event.picture} alt={event.name}/>
                <p>{event.name}</p>
                <p>{startTime.toLocaleDateString('default', options)} - {endTime.toLocaleDateString('default', options)} </p>
                </div>
        </li>
    })  
    
    return (<div>
        {!events && 'Loading...'}
        <h1>Events that are over</h1>
        <ul>
        {eventItems}
        </ul>
        <p>Showing {(total - offset) > limit ? limit : (total - offset)} events out of {total}</p>
        {offset > 0 && 
            <button className="eventsListButtons" onClick={onPrevious}>Back to previous events</button>}
        {(offset + limit) < total && 
            <button className="eventsListButtons" onClick={onNext}>next events</button>}

        </div>)
    }
    
    
    export default PastEvents;