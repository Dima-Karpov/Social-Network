import React from 'react';
import './App.css';
import { Header } from './сomponents/Header/Header';
import { Music } from './сomponents/Music/Music';
import { Navbar } from './сomponents/Navbar/Navbar';
import { News } from './сomponents/News/News';
import { Profile } from './сomponents/Profile/Profile';
import { Settings } from './сomponents/Settings/Settings';
import { Route } from 'react-router-dom';
import {  DialogsContainer } from './сomponents/Dialogs/Dialogs';
import { Users, UsersContainer } from './сomponents/Users/Users';


type AppPropsType = {
};

const App: React.FC<AppPropsType> = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile'
          render={() =>
            < Profile/>} />
        <Route path='/messages'
          render={() => <DialogsContainer />} />
        <Route path='/users'
          render={() => <UsersContainer /> }/>

        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
