import React from 'react';
import { ProfileType } from '../../redux/profile-reducer';
import { MyPostsContainer } from './MyPosts/MyPosts';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
};

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.descriptionBlock}>
            <ProfileInfo 
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </div>
    );
} 