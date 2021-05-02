import React from 'react';
import { DialogsPageType, } from '../../redux/state';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';


type PropsType = {
    state: DialogsPageType

}

export const Dialogs = (props: PropsType) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElement = props.state.messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>


        </div>
    );
}