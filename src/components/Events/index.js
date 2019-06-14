import React, { Component } from 'react';
import { loadEvents } from '../../actions/loadEvents';
import { connect } from "react-redux";
import EventsList from './EventsList'



class EventsListContainer extends Component {
   componentDidMount() {
    this.props.loadEvents()
   }
   
    render() {
        return (
            <div>
                <EventsList events={this.props.events} user={this.props.user} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {  
      events: state.events,
      user: state.userLogedIn
    }
  }

export default connect(mapStateToProps,{ loadEvents })(EventsListContainer);
  