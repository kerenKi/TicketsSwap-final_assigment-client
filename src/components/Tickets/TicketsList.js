import React from 'react';
import { Link } from 'react-router-dom'
import TicketFormContainer from '../newTicketForm'

function TicketsList(props) {
    const { tickets, event, user, eventId, risks } = props

    const ticketItems = tickets && tickets.map((ticket,index) => {
        return <li key={ticket.id} className="tickets" style={{backgroundColor:riskColor(risks[index])}}>
            <Link to={`/tickets/${ticket.id}`} >
                <p>Title: {ticket.title}</p>
                <p>Seller: {ticket.user.user_name}</p>
                <p>Price: {ticket.price}</p>
                <p>Risk: {risks[index]} %</p>
               
            </Link>
        </li>
    })  
    const startTime = new Date(event.start_time)
    const endTime = new Date(event.end_time)
    const options = { weekday: 'short', year: '2-digit', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'};

    
    return (<div>
        {!event && 'Loading...'}
        {event && <div>
          <h1>{event.name}</h1>
          <div className="eventDescription">
          <p>{startTime.toLocaleDateString('default', options)} - {endTime.toLocaleDateString('default', options)}</p>
          <p>{event.description}</p>
          </div>

          <div className="linkToOtherEvents">
            <Link to='/events' >Look at other events</Link>
          </div>

          <h2>Available tickets for {event.name} : </h2>
          {tickets.length ?
             <ul>{ticketItems}</ul>
            :
            'There are no tickets for sale at the moment'}
          {!user.jwt && <div className="eventsListNotAMember">
          <h3>Want to sell a ticket? <br/> 
          Only our members can post tickets for sale <br/>
          <Link to='/signup'> SIGN UP </Link> or  
          <Link to='/'> LOG IN </Link></h3>
          </div>}
          {user.jwt && <div className="addEventForm">
                <h1>Have a ticket you want to sell?</h1>
                <TicketFormContainer eventId={eventId}/>
            </div>}
          </div>}
        </div>)
    }
    
export function riskColor(risk)  {
    const green = '#45dea3';
    const red = '#da7365';
    const yellow = '#dad865';
    if (risk <= 30){
        return green
    } else if (risk >= 60){
        return red
    } else {
        return yellow
    }
}    
    export default TicketsList;