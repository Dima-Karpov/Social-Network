import React from 'react';
import { NavLink } from 'react-router-dom';
import { InitStateType } from '../../redux/auth-reducer';
import s from './Header.module.css';


type HeaderPropsType = {
  data: InitStateType
}



export const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <img src='https://cdn.dribbble.com/users/1265223/screenshots/5321233/samurai.png'></img>
      <div className={s.loginBlock}>
        {props.data.isAuth ? props.data.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}