import React, { Component } from 'react';
import { loadEvents } from '../../actions/loadEvents';
import { connect } from "react-redux";
import EventsList from './EventsList'



class EventsListContainer extends Component {
   componentDidMount() {
    this.props.loadEvents(0)
   }

  onNext = () => {
    this.props.loadEvents(this.props.offset + this.props.limit)
  }
  onPrevious = () => {
    this.props.loadEvents(this.props.offset - this.props.limit)
  }
   
    render() {
      const { events, limit, offset, total, user } = this.props
        return (
            <div>
                <EventsList 
                  events={events} 
                  limit={limit} 
                  offset={offset} 
                  total={total} 
                  user={user} 
                  onNext={this.onNext}
                  onPrevious={this.onPrevious}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {  
      events: state.events.events,
      limit: state.events.limit,
      offset: state.events.offset,
      total: state.events.total,
      user: state.userLogedIn
    }
  }

export default connect(mapStateToProps,{ loadEvents })(EventsListContainer);
  