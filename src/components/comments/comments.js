import React from 'react';

function Comments(props) {
    const { comments } = props
    const commentItems = comments && comments.map(comment => {
     return <li key={comment.id}>
        <div>
          <span><strong>{comment.user.user_name}</strong></span>
          <p>{comment.text}</p>
        </div>
      </li>
    })
    
    return (<div>
        {comments && <div>
          <h1>Comments on this ticket:</h1>
          <ul>
          {commentItems}
          </ul>
          </div>}
        </div>)
    }
    
    
  export default Comments;
