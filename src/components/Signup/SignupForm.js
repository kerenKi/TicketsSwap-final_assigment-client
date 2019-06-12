import React from 'react';

function SignupForm(props) {
    
    return (<div>
      <h1>SIGN IN</h1>
        <form onSubmit={props.onSubmit}>
        <label>User name: </label>
          <input type="text" name="user_name" required value={props.values.user_name} onChange={props.onChange}></input>
         
         <label>Email address: </label>
          <input type="text" name="email" required value={props.values.email} onChange={props.onChange}></input>

          <label>Password: </label>
          <input type="password" name="password" required value={props.values.password} onChange={props.onChange}></input>

          
          <input type="submit" value="Sign me up" />
        </form>
        </div>)
    }
    

    export default SignupForm;