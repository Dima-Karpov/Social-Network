import React from 'react';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { authAPI } from '../api/api';
import { AppStateType } from './redux-store';
import {stopSubmit} from 'redux-form'


type ActionType = ReturnType<typeof setAuthUserData>

const SET_USER_DATA = 'SET-USER-DATA';

export type InitStateType = {
    id: number | null,
    email: string | null,
    login:  string | null,
    isAuth: boolean,
};

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,

};

const authReducer = (state: InitStateType = initialState, action: ActionType): InitStateType => {

    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.payload,
            }
        default: 
            return state;
    };
};


export const setAuthUserData = ( id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    } as const
};

export const getAuthUserData = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
};

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Incorrectly entered email or passwordr';
                dispatch(stopSubmit('login', { _error: message }));
            }
        })
};
export const logout = () => (dispatch: Dispatch<any>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {   
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
};




export default authReducer