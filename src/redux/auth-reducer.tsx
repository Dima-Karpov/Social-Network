import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { authAPI } from '../api/api';
import { AppStateType } from './redux-store';


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
                ...action.data,
                isAuth: true
            }
        default: 
            return state;
    };
};

export const setAuthUserData = ( id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    } as const
};

export const getAuthUserData = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {
        authAPI.mu()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
};


export default authReducer