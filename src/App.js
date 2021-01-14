import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TokenService from './services/token-service';

import EditListPage from './EditPage/EditPage';
import CreateListPage from './CreateListPage/CreateListPage';
import GamePage from './GamePage/GamePage';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import PicturadesContext from './Contexts/PicturadesContext';
import ListsPage from './ListsPage/ListsPage';
import Header from './Header/Header';
import AboutPage from './AboutPage/AboutPage';
import HomePage from './HomePage/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  updateIsUserLoggedIn = () => {
    this.setState({ isLoggedIn: TokenService.hasAuthToken()})
  }

  componentDidMount() {
    this.updateIsUserLoggedIn();
  }
  
  render() {
    const contextValue = {
      isLoggedIn: this.state.isLoggedIn,
      toggleUserLoggedIn: this.updateIsUserLoggedIn
    }

    return (
      <PicturadesContext.Provider value={contextValue}>
        <Header/>
        <main>
          <Route exact path='/' component={HomePage}/>
          <Route path='/about' component={AboutPage}/>
          <Route exact path='/lists' component={ListsPage}/>
          <Route path='/lists/:list_id/edit' component={EditListPage}/>
          <Route path='/lists/create' component={CreateListPage}/>
          <Route path='/game/:list_id' component={GamePage}/>
          <Route path='/login' component={LoginForm}/>
          <Route path='/register' component={RegisterForm}/>

        </main>
      </PicturadesContext.Provider>
    );
  }
}

export default App;
