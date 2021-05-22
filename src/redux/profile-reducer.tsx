import React from 'react';
import { ActionType } from '../StoreContext';

export type PostsType = {
    id: number
    message: string
    likesCount: string
  };
  export type InitialStateType = typeof initialState 


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        { id: 1, message: 'Hello my friend! Are you in the mood to study React?', likesCount: '12' },
        { id: 2, message: 'We fly', likesCount: '120' },
      ] as Array<PostsType>,
      newPostText: '',
};


const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: '0'
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}
export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
};
export const changeNewTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text || ''
    } as const
};

export default profileReducer