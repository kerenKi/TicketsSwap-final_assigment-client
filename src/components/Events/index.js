import React, { Component } from 'react';
import { loadEvents } from '../../actions/loadEvents';
import { connect } from "react-redux";
import EventsList from './EventsList'
// import CreateEventFormContainer from './CreateEventFormContainer'



class EventsListContainer extends Component {
   componentDidMount() {
    this.props.loadEvents()
   }
   
    render() {
        return (
            <div>
                <EventsList events={this.props.events} />
                {/* <CreateEventFormContainer /> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {  
      events: state.events
    }
  }

export default connect(mapStateToProps,{ loadEvents })(EventsListContainer);
  