import React from 'react';
import { ProfileType } from '../../redux/profile-reducer';
import { MyPostsContainer } from './MyPosts/MyPosts';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


type ProfilePropsType = {
    profile: ProfileType
};

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.descriptionBlock}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}