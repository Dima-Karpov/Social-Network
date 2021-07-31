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

type ActionType = ReturnType<typeof sendMessageC>


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
};

const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      }
    default:
      return state;
  }
}

export const sendMessageC = (newMessageBody: string) => {
  return {
    type: SEND_MESSAGE, 
    newMessageBody,
  } as const
};


export default dialogsReducer