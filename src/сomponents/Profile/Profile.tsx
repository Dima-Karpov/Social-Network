import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import {ActionType, ProfilePageType, RootStateType } from '..//../redux/state';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}


export const Profile = (props: PropsType) => {
    return (
        <div className={s.descriptionBlock}>
            <ProfileInfo />
            <MyPosts
              state = {props.profilePage.posts}
              newPostText={props.profilePage.newPostText}
              dispatch={props.dispatch}
            />
        </div>
    );

}