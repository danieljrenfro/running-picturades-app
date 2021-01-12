import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';
import PicturadesContext from './PicturadesContext';
import ListsPage from './ListsPage/ListsPage';
import Header from './Header/Header';
import AboutPage from './AboutPage/AboutPage';
import HomePage from './HomePage/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    
  }
  
  render() {
    const contextValue = {
      
    }

    return (
      <PicturadesContext.Provider value={contextValue}>
        <Header/>
        <main>
          <Route exact path='/' component={HomePage}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/lists' component={ListsPage}/>
          <Route path='/login' component={LoginForm}/>
        </main>
      </PicturadesContext.Provider>
    );
  }
}

export default App;
