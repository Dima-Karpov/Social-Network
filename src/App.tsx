import React from 'react';
import './App.css';
import { Header } from './сomponents/Header/Header';
import { Music } from './сomponents/Music/Music';
import { Navbar } from './сomponents/Navbar/Navbar';
import { News } from './сomponents/News/News';
import { Settings } from './сomponents/Settings/Settings';
import { Route } from 'react-router-dom';
import ProfileContainer from './сomponents/Profile/ProfileContainer';
import { HeaderContainer } from './сomponents/Header/HeaderContainer';
import { Login } from './сomponents/Login/Login';
import Dialogs from './сomponents/Dialogs/Dialogs';
import UsersComponent from './сomponents/Users/UsersContainer'


type AppPropsType = {
};

const App: React.FC<AppPropsType> = (props) => {
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

export default App;
