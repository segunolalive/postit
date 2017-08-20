import React from 'react';
import { Link } from 'react-router-dom';
import Home from './home';
import VisitorNav from './visitornav';

const SignupForm = (props) => {
  let signupValue = '';
    if (props.loading) {
      signupValue = 'Signing up...';
    } else {
      signupValue = 'Signup';
    } 
  return (
    <div>
      <VisitorNav />
      <Home> 
        <div className="col s6 offset-s3">
          <p className="red-text">&nbsp; {props.error}</p>
          <form method="POST" action="#" onSubmit={props.handleSubmit.bind(this)}>

            <div className="input-field">
              <input type="text" name="fullName" id="fullName" onChange={props.handleChange.bind(this)} />
              <label htmlFor="fullName"> Full Name </label>
            </div>

            <div className="input-field">
              <input type="text" name="username" id="username" onChange={props.handleChange.bind(this)} />
              <label htmlFor="username"> Username </label>
            </div>

            <div className="input-field">
              <input type="email" name="email" onChange={props.handleChange.bind(this)} />
              <label htmlFor="email"> Email </label>
            </div>

            <div className="input-field">
              <input type="text" name="phoneNumber" id="phoneNumber" onChange={props.handleChange.bind(this)} />
              <label htmlFor="phoneNumber"> Phone Number</label>
            </div>

            <div className="input-field">
              <input type="password" name="password" onChange={props.handleChange.bind(this)} />
              <label htmlFor="password"> Password </label>
            </div>

            <input type="submit" value={signupValue} className="btn align-center blue" />
            <span> Already have and acount? <Link to="login"> Login </Link> </span>
          </form>
        </div>
      </Home>
    </div>
  );
};
export default SignupForm;
