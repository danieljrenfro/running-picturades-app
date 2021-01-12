import React, { Component } from 'react';

import './RegisterForm.css';

import history from '../history';
import AuthApiService from '../services/auth-api-service';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      user_name: '',
      full_name: '',
      password: '',
      repeat_password: ''
    }
  }

  updateUserName = (value) => {
    this.setState({ user_name: value })
  }

  updateFullName = (value) => {
    this.setState({ full_name: value })
  }

  updatePassword = (value) => {
    this.setState({ password: value })
  }

  updateRepeatPassword = (value) => {
    this.setState({ repeat_password: value })
  }

  resetForm = () => {
    this.setState({
      user_name: '',
      full_name: '',
      password: '',
      repeat_password: ''
    })
  }

  handleRegisterFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ error: null });
    const { user_name, full_name, password, repeat_password } = this.state;

    if (password === repeat_password) {
      AuthApiService.postUser({
        user_name: user_name,
        password: password,
        full_name: full_name
      })
        .then(user => {
          this.resetForm();
          history.push('/login');
        })
        .catch(res => this.setState({ error: res.error }))
    } else {
      this.setState({ error: `'Password' and 'Repeat Password' must match`})
    }
  }

  render() {
    const { error, user_name, full_name, password, repeat_password } = this.state;

    return (
      <section className='register-section'>
        
        <form onSubmit={(e) => this.handleRegisterFormSubmit(e)} className="register-form">
          <h2 className="register-header">Register</h2>
          {error && <p className="error-message">{error}</p>}
          <label htmlFor="user_name">Username:</label>
          <input 
            onChange={(e) => this.updateUserName(e.target.value)}
            value={user_name}
            type="text" 
            name="user_name" 
            id="user_name" 
            required/>

          <label htmlFor="full_name">Full Name:</label>
          <input 
            onChange={(e) => this.updateFullName(e.target.value)}
            value={full_name}
            type="text" 
            name="full_name" 
            id="full_name" 
            required/>

          <label htmlFor="password">Password:</label>
          <input 
            onChange={(e) => this.updatePassword(e.target.value)}
            value={password}
            type="password" 
            name="password" 
            id="password" 
            required/>

          <label htmlFor="repeat_password">Repeat Password</label>
          <input
            onChange={(e) => this.updateRepeatPassword(e.target.value)}
            value={repeat_password}
            type="password" 
            name="repeat_password" 
            id="repeat_password" 
            required/>

          <div className="register-buttons">
            <button 
              className="register-btn" 
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default RegisterForm;