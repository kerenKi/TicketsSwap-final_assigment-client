import React, { Component } from 'react';
import TicketForm from './newTicketForm'
import { connect } from 'react-redux'
import { addTicket } from '../../actions/addTicket'

class TicketFormContainer extends Component {
  
  state = {
    userToken: this.props.user,
    event_id: this.props.eventId,
    title: '',
    picture:'',
    description:'',
    price:''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
 

  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.title === '' || this.state.description === '' || this.state.price === ''){
      alert('Please supply title, description and price to your ticket')
    } else {
      this.props.addTicket(this.state)
      this.setState({
        userToken: this.props.user,
        event_id: this.props.eventId,
        title: '',
        picture:'',
        description:'',
        price:''
      })
    }
  }

  render() {
    return (
      <TicketForm onChange={this.onChange} values={this.state} onSubmit={this.onSubmit}/>)
  }
}

const mapStateToProps = state => {
  return {  
    user: state.userLogedIn.jwt
  }
}

export default connect(mapStateToProps, { addTicket })(TicketFormContainer);
