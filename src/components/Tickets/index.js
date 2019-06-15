import React, { Component } from 'react';
import { loadTickets } from '../../actions/loadTickets';
import { connect } from "react-redux";
import TicketsList from './TicketsList'



class TicketsListContainer extends Component {
  eventId = this.props.match.params.id;
  currentEvent = this.props.events[0] && this.props.events.find(
    event => event.id === Number(this.eventId))

  componentDidMount() {
    this.props.loadTickets(this.eventId)
   }
   

    render() {
      
        return (
            <div>
                <TicketsList 
                  tickets={this.props.tickets} 
                  event={this.currentEvent} 
                  user={this.props.user} 
                  eventId={this.eventId}
                  risks={this.props.risks}
                  
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {  
      tickets: state.tickets.tickets,
      risks: state.tickets.risks,
      events: state.events.events,
      user: state.userLogedIn
    }
  }

export default connect(mapStateToProps,{ loadTickets })(TicketsListContainer);
  