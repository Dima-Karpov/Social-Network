import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, InitStateType } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Header } from './Header'

type HeaderApiContainerPropsType = {
  data: InitStateType
  getAuthUserData: () => void
};

class HeaderApiContainer extends React.Component<HeaderApiContainerPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  };
  render() {
    return <Header data={this.props.data} />
  }
};

const mapStateToProps = (state: AppStateType) => ({
  data: state.auth
});
export const HeaderContainer = connect(mapStateToProps, { getAuthUserData })(HeaderApiContainer);