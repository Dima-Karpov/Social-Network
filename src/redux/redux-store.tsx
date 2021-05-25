import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";




const  rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer

    // sidebar: 
});

export type AppStateType = ReturnType<typeof rootReducer>



export const store  = createStore(rootReducer);


