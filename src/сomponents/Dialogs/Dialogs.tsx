import React, { ChangeEvent, KeyboardEvent } from 'react';
import { sendMessageC, StorePropsType, updateNewMessageC, } from '../../redux/state';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';


type PropsType = {
    store: StorePropsType
};

export const Dialogs = (props: PropsType) => {

    const state = props.store.getState().dialogsPage;

    const dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    const messagesElement = state.messages.map(m => <Message message={m.message} />);

    const newMessageBody = state.newMessageBody;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageC())
    };
    const onKeyPressSendMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            onSendMessageClick()
        }
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageC(body))
    };



    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        onKeyPress={onKeyPressSendMessage}
                        placeholder='Enter your message'>
                    </textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>
    );
}