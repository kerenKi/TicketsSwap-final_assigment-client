import React from 'react';
// import { Link } from 'react-router-dom'

function TicketDetails(props) {
    const { ticket } = props
    const { user_name,event_name,description,picture,price } = ticket
    
    return (<div>
        {!ticket && 'Loading...'}
        {ticket && <div>
          <h1>{user_name}'s ticket:</h1>
          <p>For: {event_name}</p>
          <p>Description: {description}</p>
          {picture && <img src={picture} alt='The ticket'/>}
          <p>Price: {price}</p>
          </div>}
        </div>)
    }
    
    
    export default TicketDetails;