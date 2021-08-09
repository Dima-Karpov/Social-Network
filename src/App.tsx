import React, { Component } from 'react';
import './App.css';
import { Header } from './сomponents/Header/Header';
import { Music } from './сomponents/Music/Music';
import { Navbar } from './сomponents/Navbar/Navbar';
import { News } from './сomponents/News/News';
import { Settings } from './сomponents/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import ProfileContainer from './сomponents/Profile/ProfileContainer';
import { HeaderContainer } from './сomponents/Header/HeaderContainer';
import Dialogs from './сomponents/Dialogs/Dialogs';
import UsersComponent from './сomponents/Users/UsersContainer'
import Login from './сomponents/Login/Login';
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/auth-reducer';
import { compose } from 'redux';


type AppType = {
  getAuthUserData: () => void
};

class App extends React.Component<AppType> {
  componentDidMount() {
    this.props.getAuthUserData();
  };

  render() {
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?'
            render={() =>
              < ProfileContainer />} />
          <Route path='/messages'
            render={() => <Dialogs />} />
          <Route path='/users'
            render={() => <UsersComponent />} />
          <Route path='/login'
            render={() => <Login />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(null, {getAuthUserData}))(App)

