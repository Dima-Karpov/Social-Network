import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { InitStateType, setAuthUserData } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import {Header} from './Header'

type HeaderApiContainerPropsType = {
    data: InitStateType
  setAuthUserData: (id: number, email: string, login: string) => void
};

class HeaderApiContainer extends React.Component<HeaderApiContainerPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
      withCredentials: true,
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login)
        }
      })
  };
  render() {
    return <Header data={this.props.data}/>
  }
};

const mapStateToProps = (state: AppStateType) => ({
  data: state.auth
});
export  const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderApiContainer);