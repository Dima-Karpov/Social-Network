import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';


export const DialogItem = (props: any) => (
    <div className={s.dialog}>
        <NavLink to={'/messages/' + props.id}>{props.name}
        </NavLink>
    </div>
); 