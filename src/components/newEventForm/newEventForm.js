import React from 'react';

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
        <label>
          Starts at:
          <input type="text" name="start_time" value={props.values.start_time} onChange={props.onChange}/>
        </label>

        <label>
          End Time:
          <input type="text" name="end_time" value={props.values.end_time} onChange={props.onChange}/>
        </label>
      </label>
    <input type="submit" value="Post your event" />
    </form>  
    )
  }
  
