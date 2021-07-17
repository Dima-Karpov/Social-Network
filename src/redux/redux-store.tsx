import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware  from "redux-thunk";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import {reducer as formReducer} from 'redux-form'


const  rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,

    // sidebar: 
});



export const store  = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store