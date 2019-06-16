import React from 'react';
import { Link } from 'react-router-dom'

function SignupForm(props) {
    
    return (<div>
      <h1>SIGN UP</h1>
      <div className="loginForm">
        <form onSubmit={props.onSubmit}>
        <label>User name: </label>
          <input type="text" name="user_name" required value={props.values.user_name} onChange={props.onChange}></input>
         
         <label>Email address: </label>
          <input type="email" name="email" required value={props.values.email} onChange={props.onChange}></input>

          <label>Password: </label>
          <input type="password" name="password" required value={props.values.password} onChange={props.onChange}></input>

          
          <input type="submit" value="Sign me up" />

        </form>
        </div>
        <p className="LoginLinks"> <Link className="loginFromSignupLink" to='/'> Already a member? Log in</Link></p>

        </div>)
    }
    

    export default SignupForm;