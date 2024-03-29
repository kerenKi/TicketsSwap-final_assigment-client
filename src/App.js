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
import PastEventsContainer from './components/PastEvents'
import { Link } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <ul className="navBar">
            <div>
              <li className="navBarEvents"><Link to={'/events'}> Upcoming events</Link></li>
              <li className="navBarEvents"><Link to={'/past-events'}> Past events</Link></li>
            </div>
            {!this.props.userLogedIn.jwt &&
            <div>
            <li className="navBarlogin"><Link to={'/'}> LOG IN</Link></li>
            <li className="navBarlogin"><Link to={'/signup'}> SIGN UP</Link></li>
            </div>
            }
            {this.props.userLogedIn.user_name &&
            <div>
            <li className="navBarHelloMessgae">Hello {this.props.userLogedIn.user_name} </li>
            </div>
            }
          </ul>
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
          <Route exact path="/past-events" component={PastEventsContainer}/>
          <Route exact path="/events/:id" component={TicketsListContainer} />
          <Route exact path="/tickets/:id" component={TicketDetailsContainer} />
          <Route exact path="/tickets/:id" component={CommentsContainer} />
        </main>
        <footer>
          <p> &copy; Created by Keren  <span>&#128519; &#127891;</span></p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userLogedIn: state.userLogedIn
});

export default withRouter(connect(mapStateToProps)(App));
