import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header/Header';
import AboutPage from './AboutPage/AboutPage';
import HomePage from './HomePage/HomePage';

class App extends Component {
  
  render() {
    return (
      <>
        <Header/>
        <main>
          <Route exact path='/' component={HomePage}/>
          <Route path='/about' component={AboutPage}/>
        </main>
      </>
    );
  }
}

export default App;
