import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header/Header';

class App extends Component {
  
  render() {
    return (
      <main className="App">
        <Route path='/' component={Header}/>
      </main>
    );
  }
}

export default App;
