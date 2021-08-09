import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { getAuthUserData } from './auth-reducer';
import { AppStateType } from './redux-store';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
}
export type InitialStateType = {
    initialized: boolean
}


type ActionType = ReturnType<typeof setInitilazedSuccess> ;


const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch(action.type){
        case INITIALIZED_SUCCESS :
            return {
                ...state,
                initialized: true
            }
        default: 
         return state
    }
};


export const setInitilazedSuccess = () => ({type: INITIALIZED_SUCCESS }as const);

export const initializedApp = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {
        dispatch(getAuthUserData());
        dispatch(setInitilazedSuccess());

    }
};