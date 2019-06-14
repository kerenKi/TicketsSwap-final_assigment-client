import React, { Component } from 'react';
import { loadTicket } from '../../actions/loadTicket';
import { connect } from "react-redux";
import TicketDetails from './TicketDetails'



class TicketDetailsContainer extends Component {
  ticketId = this.props.match.params.id;

  componentDidMount() {
    this.props.loadTicket(this.ticketId)
   }
   
    render() {
        return (
            <div>
              <TicketDetails ticket={this.props.currentTicket} />
              <h3>Risk:</h3>
              <p>This ticket has a {this.props.risk}% chance of being a fraud </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {  
      currentTicket: state.currentTicket,
      risk: state.risk
    }
  }

export default connect(mapStateToProps,{ loadTicket })(TicketDetailsContainer);
  