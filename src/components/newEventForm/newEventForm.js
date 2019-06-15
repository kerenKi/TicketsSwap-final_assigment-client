import React from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

export default function EventForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Event Name:
        <input type="text" name="name" value={props.values.name} onChange={props.onChange}/>
      </label>

      <label>
       Event Photo or logo:
        <input type="text" name="picture" placeholder="paste image address here" value={props.values.picture} onChange={props.onChange} />
      </label>

      <label>
        Description:
        <textarea type="text" name="description" value={props.values.description} onChange={props.onChange}/>
      </label>

      <label>Date/Time
        <br />
        <label>
          Starts at:
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

        <label>
          End Time:
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
      </label>
    <input type="submit" value="Post your event" />
    </form>  
    )
  }
  
