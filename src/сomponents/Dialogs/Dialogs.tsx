import React, { ChangeEvent, KeyboardEvent } from 'react';
import { DialogsType, MessagesType, sendMessageC, updateNewMessageC } from '../../redux/dialogs-reduser';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';
import { connect } from 'react-redux'
import { Dispatch, compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { wihtAuthRedirect } from '../../hoc/wihtAuthRedirect';

export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
    
};

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    onNewMessageChange: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType 


 const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);
    const newMessageBody = props.dialogsPage.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage()
    };
    const onKeyPressSendMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            onSendMessageClick()
        }
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.onNewMessageChange(body)
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



const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageC())
        }
    }
};



export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    wihtAuthRedirect
)(Dialogs)
