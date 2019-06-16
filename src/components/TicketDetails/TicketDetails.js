import React from 'react';

function TicketDetails(props) {
    const { ticket } = props
    const { user_name,event_name,description,picture,price } = ticket
    
    return (<div>
        {!ticket && 'Loading...'}
        {ticket && <div>
          <h1>{user_name}'s ticket:</h1>
          <p><b>For :</b> {event_name}</p>
          <p><b>Description :</b> {description}</p>
          {picture && <img src={picture} alt='The ticket'/>}
          <p><b>Price :</b> {price} Euro</p>
          </div>}
        </div>)
    }
    
    
    export default TicketDetails;