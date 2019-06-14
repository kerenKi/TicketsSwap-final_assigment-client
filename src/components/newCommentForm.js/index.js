import React, { Component } from 'react';
import CommentForm from './newCommentForm'
import { connect } from 'react-redux'
import { addComment } from '../../actions/addComment'
import { loadTicket } from '../../actions/loadTicket';


class CommentFormContainer extends Component {
  
  state = {
    userToken: this.props.user,
    ticket_id: this.props.ticketId,
    text: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
 

  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.text === ''){
      alert('You are trying to post an empty comment')
    } else {
      this.props.addComment(this.state)
      .then(this.props.loadTicket(this.state.ticket_id))
      this.setState({
        userToken:this.props.user,
        text: ''
      })
    }
  }

  render() {
    return (
      <CommentForm onChange={this.onChange} value={this.state} onSubmit={this.onSubmit}/>)
  }
}

const mapStateToProps = state => {
  return {  
    user: state.userLogedIn.jwt
  }
}

export default connect(mapStateToProps, { addComment, loadTicket })(CommentFormContainer);
