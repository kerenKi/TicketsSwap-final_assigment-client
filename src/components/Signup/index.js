import React, { Component } from 'react';
import { connect } from "react-redux";
import SignupForm from './SignupForm'
import { signupUser } from '../../actions/signup'

class SignupContainer extends Component {
  state = {
    user_name: '',
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
    this.props.signupUser(this.state)
    this.setState({
      user_name: '',
      email: '',
      password: '',
    })
   }
   
  render() {
      return (
          <div>
              <SignupForm onChange={this.onChange} onSubmit={this.onSubmit} values={this.state}/>
          </div>
      );
  }
}

export default connect(null, { signupUser })(SignupContainer);
  