import React from 'react';

export default function TicketForm (props) {
  return (
    <form className="addEventForm" onSubmit={props.onSubmit}>
      <ul>
        <li>
          <label> Title: </label>
          <input type="text" name="title" value={props.values.title} onChange={props.onChange}/>
          <span>Give your ticket a title</span>
        </li>

        <li>
          <label> Picture (optional): </label>
          <input type="text" name="picture" value={props.values.picture} onChange={props.onChange} />
          <span>If you have a piture of the ticket, paste the image address here</span>
        </li>

      <li>
        <label> Description: </label>
        <textarea type="text" name="description" value={props.values.description} onChange={props.onChange}/>
        <span>Say something about your ticket</span>      
      </li>

      <li>
        <label> Price: </label>
        <input type="text" name="price" value={props.values.price} onChange={props.onChange}/>
        <span>State your price in Euros</span>            
      </li>

      <li>
        <input type="submit" value="Post ticket for sale" />
      </li>
    </ul>
    </form>  
    )
  }
  
