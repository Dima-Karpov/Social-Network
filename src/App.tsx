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


type AppPropsType = {
  // store: StorePropsType
};

const App: React.FC<AppPropsType> = (props) => {
  // const state = props.store.getState()
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
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
