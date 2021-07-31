import React from 'react';
import { ProfileType } from '../../../redux/profile-reducer';
import { Preloader } from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import { ProfileStatus } from './ProfileStatus';

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div > */}
                {/* <img src='https://nastol.net/wallpaper/big/58/1181383-pole-trava-zelenyy-priroda-nebo-peyzazhi.jpg' ></img> */}

            {/* </div> */}
            <div>
                <img src={props.profile.photos.large} />
                 <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

                {props.profile.fullName} <br />
                {props.profile.aboutMe} <br />
                {props.profile.lookingForAJob}
                {props.profile.lookingForAJobDescription}
            </div>
        </div>
    );
};