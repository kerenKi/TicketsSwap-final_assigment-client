import React from 'react';
import { Link } from 'react-router-dom'
import CommentFormContainer from '../newCommentForm.js'

function Comments(props) {
    const { comments, user, ticketId } = props
    const commentItems = comments && comments.map(comment => {
     return <li key={comment.id} className="comments">
        <div>
          <span><strong>{comment.user.user_name} </strong></span>
          <p>{comment.text}</p>
        </div>
      </li>
    })
    
    return (<div>
        {comments && <div>
          <h1>Comments on this ticket:</h1>
          <ul className="comments">
          {commentItems}
          </ul>
         {!user.jwt && <div className="eventsListNotAMember">
          <h3>Want to post a comment? <br/> 
          Only our members can post comments <br/>
          <Link to='/signup'> SIGN UP </Link> or  
          <Link to='/'> LOG IN </Link></h3>
          </div>}
          {user.jwt && <CommentFormContainer ticketId={ticketId}/>}
          </div>}
        </div>)
    }
    
    
  export default Comments;
