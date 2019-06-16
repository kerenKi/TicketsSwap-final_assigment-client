import React, { Component } from 'react';
import { loadTicket } from '../../actions/loadTicket';
import { connect } from "react-redux";
import TicketDetails from './TicketDetails'
import { riskColor } from '../Tickets/TicketsList'



class TicketDetailsContainer extends Component {
  ticketId = this.props.match.params.id;

  componentDidMount() {
    this.props.loadTicket(this.ticketId)
   }
   
    render() {
        return (
            <div className="risk">
              <TicketDetails ticket={this.props.currentTicket} />
              <h3>Risk:</h3>
              <p style={{backgroundColor:riskColor(this.props.risk)}}>This ticket has a <b>{this.props.risk}%</b> chance of being a fraud </p>
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
  