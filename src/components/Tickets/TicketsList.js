import React from 'react';
import { Link } from 'react-router-dom'

function TicketsList(props) {
    const { tickets, event } = props
    const ticketItems = tickets && tickets.map(ticket => {
        return <li key={ticket.id}>
            <Link to={`/tickets/${ticket.id}`} >
                <div>
                <p>Title: {ticket.title}</p>
                <p>Seller: {ticket.user.user_name}</p>
                <p>Price: {ticket.price}</p>
                <p>Description: {ticket.description}</p>
                </div>
            </Link>
        </li>
    })  
    
    return (<div>
        {!event && 'Loading...'}
        {event && <div>
          <h1>{event.name}</h1>
          <p>{event.start_time} - {event.end_time}</p>
          <p>{event.description}</p>
          <h2>Available tickets for {event.name} : </h2>
          {!tickets[0] && 'There are no tickets for sale at the moment'}
          <ul>
          {ticketItems}
          </ul>
          <Link to='/events'>Look at other events</Link>
          </div>}
        </div>)
    }
    
    
    export default TicketsList;