import React from 'react';

export default function CommentForm (props) {
  return (
    <form onSubmit={props.onSubmit}>

      <label>
        Your comment:
        <textarea type="text" name="text" value={props.value.text} onChange={props.onChange}/>
      </label>

    <input type="submit" value="Post comment" />
    </form>  
    )
  }
  
