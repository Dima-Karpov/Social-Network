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



export const store  = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
