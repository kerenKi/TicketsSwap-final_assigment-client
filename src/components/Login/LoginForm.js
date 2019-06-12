import React from 'react';

function LoginForm(props) {
    
    return (<div>
      <h1>LOG IN</h1>
        <form onSubmit={props.onSubmit}>
         
         <label>Email address: </label>
          <input type="text" name="email" required value={props.values.email} onChange={props.onChange}></input>

          <label>Password: </label>
          <input type="password" name="password" required value={props.values.password} onChange={props.onChange}></input>

          
          <input type="submit" value="Log in" />
        </form>
        </div>)
    }
    

    export default LoginForm;