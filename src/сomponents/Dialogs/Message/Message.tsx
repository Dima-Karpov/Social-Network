import React from 'react';
import s from './../Dialogs.module.css';


export const Message = React.memo((props: any) => (
    <div className={s.messag}>
        {props.message}
    </div>
));