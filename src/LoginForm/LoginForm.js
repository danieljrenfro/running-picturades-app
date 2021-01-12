import React, { Component } from 'react';
import history from '../history';

import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    }
  }

  handleLoginFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = event.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken)
        history.push('/');
      })
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
    const { error } = this.state;

    return (
      <section className='login-section'>

        <form onSubmit={(e) => this.handleLoginFormSubmit(e)} className="login-form">
          {error && <p className="error-message">{error}</p>}
          <label htmlFor="user_name">Username:</label>
          <input type="text" name="user_name" id="user_name" required />

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required />

          <div className="login-buttons">
            <button className="login-btn" type="submit">Login</button>
          </div>
        </form>
      </section>
    )
  }
}

export default LoginForm;