import { combineReducers, createStore } from "redux";
import dialogsReducer, { sendMessageC, updateNewMessageC } from "./dialogs-reduser";
import profileReducer, { addPostAC, changeNewTextAC, PostsType } from "./profile-reducer";




const  rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,

    // sidebar: 
});

export type AppStateType = ReturnType<typeof rootReducer>



export const store  = createStore(rootReducer);


