import React from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

export default function EventForm (props) {
  return (
    <form className="addEventForm" onSubmit={props.onSubmit}>
      <ul>
        <li>
          <label> Event Name: </label>
          <input type="text" name="name" value={props.values.name} onChange={props.onChange}/>
          <span>Enter your event name here</span>
        </li>

        <li>
          <label> Event Photo or logo:  </label>
          <input type="text" name="picture" value={props.values.picture} onChange={props.onChange} />
          <span>Paste image address here</span>
       
        </li>

        <li>
          <label> Description: </label>
          <textarea type="text" name="description" value={props.values.description} onChange={props.onChange}/>
          <span>Tell us what the event is gonne be like</span>
        </li>

        <li>
          <label> Starts at:
            <DatePicker
              selected={props.startSelected}
              onChange={props.handleStartChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </label>

          <label> End Time:
            <DatePicker
              selected={props.endSelected}
              onChange={props.handleEndChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
            </label>
        <span>Pick the event Date/Time</span>

        </li>
      
        <li>
          <input type="submit" value="Post your event" />
        </li>
      </ul>
    </form>  
    )
  }
  
