import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import {ProfilePageType, RootStateType } from '..//../redux/state';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


type PropsType = {
    profilePage: ProfilePageType
    addPost: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
}


export const Profile = (props: PropsType) => {
    return (
        <div className={s.descriptionBlock}>
            <ProfileInfo />
            <MyPosts
              state = {props.profilePage.posts}
              addPost = {props.addPost}
              newPostText={props.profilePage.newPostText}
              updateNewPostText={props.updateNewPostText}
            />
        </div>
    );

}