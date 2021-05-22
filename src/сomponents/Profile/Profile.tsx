import React from 'react';
import { MyPostsContainer } from './MyPosts/MyPosts';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


type PropsType = {
}

export const Profile = (props: PropsType) => {
    return (
        <div className={s.descriptionBlock}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );

}