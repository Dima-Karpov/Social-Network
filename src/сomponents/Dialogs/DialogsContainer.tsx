import React, { } from 'react';
import { DialogsType, InitialStateType, MessagesType, sendMessageC, updateNewMessageC, } from '../../redux/dialogs-reduser';
import {connect} from 'react-redux'
import { Dispatch } from 'redux';


//   export type DialogsPageType = {
//     messages: Array<MessagesType>
//     dialogs: Array<DialogsType>
//     newMessageBody: string
//   };

// type MapStatePropsType = {
//     dialogsPage: DialogsPageType
// }

// type MapDispatchPropsType = {
//     onNewMessageChange: () => void
//     sendMessage: (body: string) => void
// }

// export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


// const mapStateToProps = (state: DialogsPropsType): MapStatePropsType => {
//     return {
//         dialogsPage: state.dialogsPage
//     }
// }
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         onNewMessageChange: () => { 
//             dispatch(sendMessageC())
//         },
//         sendMessage: (body: string) => {
//             dispatch(updateNewMessageC(body))
//         }
//     }
// }


// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
