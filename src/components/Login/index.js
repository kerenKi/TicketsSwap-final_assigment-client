//The container for LoginForm

import React, { Component } from 'react';
import { connect } from "react-redux";
import LoginForm from './LoginForm'
import { loginUser } from '../../actions/login'

class LoginContainer extends Component {
  state = {
    email: '',
    password: '',
  }

  onChange  = (event) => {
    this.setState({
    [event.target.name] : event.target.value
    })
  }

   onSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state)
    this.setState({
      email: '',
      password: '',
    })
   }
   
  render() {
      return (
          <div>
              <LoginForm onChange={this.onChange} onSubmit={this.onSubmit} values={this.state}/>
          </div>
      );
  }
}

// Redux: connect to state, bind action creator
export default connect(null, { loginUser })(LoginContainer);
  