import React from 'react';
import './App.css';
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import LoginContainer from './components/Login'
import SignupContainer from './components/Signup'
import EventsListContainer from './components/Events'
import TicketsListContainer from './components/Tickets'
import TicketDetailsContainer from './components/TicketDetails'
import CommentsContainer from './components/comments'




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <p>Nav Bar will be here later</p>
        </header>
        <main>
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

          <Route exact path="/events" component={EventsListContainer}/>
          <Route exact path="/events/:id" component={TicketsListContainer} />
          <Route exact path="/tickets/:id" component={TicketDetailsContainer} />
          <Route exact path="/tickets/:id" component={CommentsContainer} />
        </main>
        <footer>
          <p>Created by Keren ;)</p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userLogedIn: state.userLogedIn
});

export default withRouter(connect(mapStateToProps)(App));
