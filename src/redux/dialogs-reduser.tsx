import React from 'react';


export type DialogsType = {
  id: number
  name: string
};

export type MessagesType = {
  id: number
  message: string
};

export type InitialStateType = typeof initialState

type ActionType = ReturnType<typeof sendMessageC> |
  ReturnType<typeof updateNewMessageC>


const SEND_MESSAGE = 'SEND-MASSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const initialState = {
  dialogs: [
    { id: 1, name: 'Yra' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Vlad' },
    { id: 4, name: 'Dmitry' },
    { id: 5, name: 'Alex' },
    { id: 6, name: 'Natasha' },
  ] as Array<DialogsType>,
  messages: [
    { id: 1, message: 'HI' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'YO' },
    { id: 4, message: 'YO' },
  ] as Array<MessagesType>,
  newMessageBody: ''
};

const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }
    case SEND_MESSAGE:
      const body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }]
      }
    default:
      return state;
  }
}

export const sendMessageC = () => {
  return {
    type: SEND_MESSAGE,
  } as const
};
export const updateNewMessageC = (body: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  } as const
};

export default dialogsReducer