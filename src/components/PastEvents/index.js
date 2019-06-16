// PastEventsContainer
import React, { Component } from 'react';
import { loadPastEvents } from '../../actions/loadPastEvents';
import { connect } from "react-redux";
import PastEvents from './PastEvents'



class PastEventsContainer extends Component {
   componentDidMount() {
    this.props.loadPastEvents(0)
   }

  onNext = () => {
    this.props.loadPastEvents(this.props.offset + this.props.limit)
  }
  onPrevious = () => {
    this.props.loadPastEvents(this.props.offset - this.props.limit)
  }
   
    render() {
      const { events, limit, offset, total } = this.props
        return (
            <div>
                <PastEvents 
                  events={events} 
                  limit={limit} 
                  offset={offset} 
                  total={total} 
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
    }
  }

export default connect(mapStateToProps,{ loadPastEvents })(PastEventsContainer);
  