import React from 'react';
import { DialogsType, MessagesType, sendMessageC } from '../../redux/dialogs-reduser';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';
import { connect } from 'react-redux'
import { Dispatch, compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { wihtAuthRedirect } from '../../hoc/wihtAuthRedirect';
import { AddMessageFormRedux } from './AddMessageForm';

export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string

};

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    const messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);
    const newMessageBody = props.dialogsPage.newMessageBody;

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage} />

                </div>
            </div>

        </div>
    );
};


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageC(newMessageBody))
        }
    }
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    wihtAuthRedirect
)(Dialogs)