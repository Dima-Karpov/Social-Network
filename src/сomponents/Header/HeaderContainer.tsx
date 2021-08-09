import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, InitStateType, logout } from '../../redux/auth-reducer';
import { RootState } from '../../redux/redux-store';
import { Header } from './Header'

type HeaderApiContainerPropsType = {
  data: InitStateType
  getAuthUserData: () => void
  logout: () => void
};

class HeaderApiContainer extends React.Component<HeaderApiContainerPropsType> {
 
  render() {
    return <Header
      data={this.props.data}
      logout={this.props.logout}
    />
  }
};

const mapStateToProps = (state: RootState) => ({
  data: state.auth,
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export const HeaderContainer = connect(mapStateToProps, { getAuthUserData, logout })(HeaderApiContainer);