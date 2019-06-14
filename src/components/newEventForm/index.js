import React, { Component } from 'react';
import EventForm from './newEventForm'
import { connect } from 'react-redux'
import { addEvent } from '../../actions/addEvent'

class EventFormContainer extends Component {
  
  state = {
    userToken: this.props.user,
    name: '',
    picture:'',
    description:'',
    start_time:'',
    end_time:''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
 

  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.name === '' ||
        this.state.description === '' || 
        this.state.start_time === '' || 
        this.state.end_time === '') {
      alert('Please supply Event Name, description and Date/Time to your event')
    } else {
      this.props.addEvent(this.state)
      this.setState({
        userToken: this.props.user,
        name: '',
        picture:'',
        description:'',
        start_time:'',
        end_time:''
      })
    }
  }

  render() {
    return (
      <EventForm onChange={this.onChange} values={this.state} onSubmit={this.onSubmit}/>)
  }
}

const mapStateToProps = state => {
  return {  
    user: state.userLogedIn.jwt
  }
}

export default connect(mapStateToProps, { addEvent })(EventFormContainer);
