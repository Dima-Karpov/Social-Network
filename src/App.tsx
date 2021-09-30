import React, { Suspense } from 'react';
import './App.css';
import { Music } from './сomponents/Music/Music';
import { Navbar } from './сomponents/Navbar/Navbar';
import { News } from './сomponents/News/News';
import { Settings } from './сomponents/Settings/Settings';
import {  HashRouter, Route } from 'react-router-dom';
import { HeaderContainer } from './сomponents/Header/HeaderContainer';
import Login from './сomponents/Login/Login';
import { connect } from 'react-redux';
import { initializedApp } from './redux/app-reducer';
import { RootState, store } from './redux/redux-store';
import { Preloader } from './сomponents/common/preloader/Preloader';
import { Provider } from 'react-redux'

const ProfileContainer = React.lazy(() => import('./сomponents/Profile/ProfileContainer'));
const Dialogs = React.lazy(() => import('./сomponents/Dialogs/Dialogs'));
const UsersComponent = React.lazy(() => import('./сomponents/Users/UsersContainer'));


type AppType = {
  initializedApp: () => void
  initialized: boolean
};

class App extends React.Component<AppType> {
  componentDidMount() {
    this.props.initializedApp();
  };

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>

        <Suspense fallback={<Preloader />}>
          <Route path='/profile/:userId?'
            render={() => < ProfileContainer /> }/>
          <Route path='/messages'
            render={() => <Dialogs />}/>
          <Route path='/users'
            render={() => <UsersComponent />} />
          </Suspense>



          <Route path='/login'
            render={() => <Login />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div >
      </div >
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  initialized: state.app.initialized
});

let AppContainer = connect(mapStateToProps, { initializedApp })(App);

export const SamuraiJSApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider >
    </HashRouter>
  )
};




