import React from 'react';
import { StorePropsType, } from './redux/state';
import './App.css';
import { Dialogs } from './сomponents/Dialogs/Dialogs';
import { Header } from './сomponents/Header/Header';
import { Music } from './сomponents/Music/Music';
import { Navbar } from './сomponents/Navbar/Navbar';
import { News } from './сomponents/News/News';
import { Profile } from './сomponents/Profile/Profile';
import { Settings } from './сomponents/Settings/Settings';
import { Route } from 'react-router-dom';


type AppPropsType = {
  store: StorePropsType
  // addPost: ( newPostText: string) => void
  // updateNewPostText: (newText: string) => void
};

const App: React.FC<AppPropsType> = (props) => {
  const state = props.store.getState()
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile'
          render={() =>
            < Profile
              profilePage={props.store._state.profilePage}
              dispatch={props.store.dispatch.bind(props.store)}
            />} />
        <Route path='/messages'
          render={() => <Dialogs
            store={props.store}
          />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
