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
        {event && <h1>Available tickets for {event.name} : </h1>}
        {!tickets[0] && 'There are no tickets for sale at the moment'}
        <ul>
        {ticketItems}
        </ul>
        </div>)
    }
    
    
    export default TicketsList;