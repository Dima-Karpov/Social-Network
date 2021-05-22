import React from 'react';
import { sendMessageC, updateNewMessageC } from './redux/dialogs-reduser';
import { addPostAC, changeNewTextAC, PostsType } from './redux/profile-reducer';
import { DialogsPageType } from './сomponents/Dialogs/Dialogs';
import { ProfilePageType } from './сomponents/Profile/MyPosts/MyPosts';

type ProviderType = {
    store: StorePropsType
    children: React.ReactNode
};


export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: any

};

export type ActionType = ReturnType<typeof addPostAC> |
  ReturnType<typeof changeNewTextAC> |
  ReturnType<typeof sendMessageC> |
  ReturnType<typeof updateNewMessageC>

export type StorePropsType = {
    _state: RootStateType
    getState: () => RootStateType  // pay attention
    _onChange: () => void
    // addPost: (newPostText: string) => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
};

export const StoreContext = React.createContext({} as StorePropsType);



export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider
            value={props.store}>
            {props.children}
        </StoreContext.Provider >
    )
}