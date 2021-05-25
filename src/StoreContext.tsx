import React from 'react';
import { DialogsPageType } from './сomponents/Dialogs/Dialogs';
import { ProfilePageType } from './сomponents/Profile/MyPosts/MyPosts';
import { UsersPageType } from './сomponents/Users/Users';

type ProviderType = {
    store: StorePropsType
    children: React.ReactNode
};


export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    usersPega: UsersPageType
    sidebar: any

};

 

export type StorePropsType = {
    _state: RootStateType
    getState: () => RootStateType  // pay attention
    _onChange: () => void
  
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
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