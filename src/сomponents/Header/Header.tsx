import React from 'react';
import { NavLink } from 'react-router-dom';
import { InitStateType } from '../../redux/auth-reducer';
import s from './Header.module.css';
import { logout } from './../../redux/auth-reducer';


type HeaderPropsType = {
  data: InitStateType
  logout: () => void
}



export const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <img src='https://cdn.dribbble.com/users/1265223/screenshots/5321233/samurai.png'></img>
      <div className={s.loginBlock}>
        {props.data.isAuth
          ? <div>{props.data.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
} 