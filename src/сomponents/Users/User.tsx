import React from 'react';
import { NavLink } from 'react-router-dom';
import { UsersType } from '../../redux/users-reducer';
import userPhoto from '../../assets/images/ava.png';
import s from './users.module.css'

type UserPropsType = {
    user: UsersType
    followingInProgress: Array<number>
    unfollow:  (usersID: number) => void
    follow: (usersID: number) => void
}


export const User: React.FC<UserPropsType> = React.memo((props) => {

    const {
        user,
        followingInProgress,
        unfollow,
        follow
    } = props;

    return (
        <div>
        <span>
            <div>
                <NavLink to={'./profile/' + user.id}>
                    <img src={user.photos.small || userPhoto} className={s.userPhoto} />
                </NavLink>
            </div>
            <div>
                {user.followed ?
                    <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id);
                        }}>Unfollow</button> :
                    <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id);
                        }}>Follow</button>}
            </div>
        </span>

        <span>
            <span>
                <div>
                    {user.name}
                </div>
                <div>
                    {user.status}
                </div>
            </span>

            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </span>
        </span>
    </div>
    )
});