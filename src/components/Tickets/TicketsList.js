import React from 'react';
import { Link } from 'react-router-dom'
import TicketFormContainer from '../newTicketForm'

function TicketsList(props) {
    const { tickets, event, user, eventId, risks } = props

    const ticketItems = tickets && tickets.map((ticket,index) => {
        return <li key={ticket.id}>
            <Link to={`/tickets/${ticket.id}`} >
                <div style={{backgroundColor:riskColor(risks[index])}}>
                <p>Title: {ticket.title}</p>
                <p>Seller: {ticket.user.user_name}</p>
                <p>Price: {ticket.price}</p>
                <p>Risk: {risks[index]}</p>
               
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
          {tickets.length ?
             <ul>{ticketItems}</ul>
            :
            'There are no tickets for sale at the moment'}
          {!user.jwt && <h3>Want to sell a ticket? <br/> 
          Only our members can post tickets for sale <br/>
          <Link to='/signup'> SIGN UP </Link> or  
          <Link to='/'> LOG IN </Link></h3>}
          {user.jwt && <TicketFormContainer eventId={eventId}/>}
          <Link to='/events'>Look at other events</Link>
          </div>}
        </div>)
    }
    
function riskColor(risk)  {
    const green = '#42d171';
    const red = '#e6483d';
    const yellow = '#f3de22';
    if (risk <= 30){
        return green
    } else if (risk >= 60){
        return red
    } else {
        return yellow
    }
}    
    export default TicketsList;