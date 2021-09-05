import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { profileAPI, usersAPI } from '../api/api';
import { AppStateType } from './redux-store';

export type PostsType = {
    id: number
    message: string
    likesCount: string
};
export type InitialStateType = typeof initialState

type ActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletPost>

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELET_POST = 'DELET-POST';


const initialState = {
    posts: [
        { id: 1, message: 'Hello my friend! Are you in the mood to study React?', likesCount: '12' },
        { id: 2, message: 'We fly', likesCount: '120' },
    ] as Array<PostsType>,
    newPostText: '',
    profile: null,
    status: '',
};

export type ProfileType = {
    aboutMe: string
    contacts:
    {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: { small: string, large: string }
    userId: number
} | null


const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likesCount: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELET_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText,
    } as const
};
export const setUsersProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    } as const
};
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status,
    } as const
}
export const deletPost = (postId: number) => {
    return {
        type: DELET_POST,
        postId,
    } as const
};



export const getUsersProfile = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {
        let response = await usersAPI.getProfile(userId);
        dispatch(setUsersProfile(response.data))

    }
};
export const getStatus = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
                dispatch(setStatus(response.data))
    }
};
export const updateStatus = (status: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
};

export default profileReducer