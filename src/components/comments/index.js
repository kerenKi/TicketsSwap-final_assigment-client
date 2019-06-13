import React, { Component } from 'react';
import { loadComments } from '../../actions/loadComments';
import { connect } from "react-redux";
import Comments from './comments'



class CommentsContainer extends Component {
  ticketId = this.props.match.params.id;

  componentDidMount() {
    this.props.loadComments(this.ticketId)
   }
   
    render() {
        return (
            <div>
                <Comments comments={this.props.comments} user={this.props.user} ticketId={this.ticketId} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {  
      comments: state.comments,
      user: state.userLogedIn
    }
  }

export default connect(mapStateToProps,{ loadComments })(CommentsContainer);
  