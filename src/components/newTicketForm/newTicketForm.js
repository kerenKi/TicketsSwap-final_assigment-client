import React from 'react';

export default function TicketForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={props.values.title} onChange={props.onChange}/>
      </label>

      <label>
        Picture (optional):
        <input type="text" name="picture" value={props.values.picture} onChange={props.onChange} />
      </label>

      <label>
        Description:
        <textarea type="text" name="description" value={props.values.description} onChange={props.onChange}/>
      </label>

      <label>
        Price:
        <input type="text" name="price" value={props.values.price} onChange={props.onChange}/>
      </label>

    <input type="submit" value="Post ticket for sale" />
    </form>  
    )
  }
  
