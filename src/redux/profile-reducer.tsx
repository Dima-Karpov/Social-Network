import React from 'react';

export type PostsType = {
    id: number
    message: string
    likesCount: string
};
export type InitialStateType = typeof initialState

type ActionType = ReturnType<typeof addPostAC> 
 | ReturnType<typeof changeNewTextAC> 
 | ReturnType<typeof setUsersProfile>

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'


const initialState = {
    posts: [
        { id: 1, message: 'Hello my friend! Are you in the mood to study React?', likesCount: '12' },
        { id: 2, message: 'We fly', likesCount: '120' },
    ] as Array<PostsType>,
    newPostText: '',
    profile: null,
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
                message: state.newPostText,
                likesCount: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
};
export const changeNewTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
};
export const setUsersProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    } as const
};

export default profileReducer