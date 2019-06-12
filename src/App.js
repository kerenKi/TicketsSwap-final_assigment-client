import React from 'react';
import './App.css';
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import LoginContainer from './components/Login'
import SignupContainer from './components/Signup'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() =>
            this.props.userLogedIn.jwt ? <Redirect to="/events" /> : <LoginContainer />
          }
        />
        <Route 
          exact 
          path="/signup" 
          render={() =>
            this.props.userLogedIn.jwt ? <Redirect to="/events" /> : <SignupContainer />
          }
        />
      
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userLogedIn: state.userLogedIn
});

export default withRouter(connect(mapStateToProps)(App));
