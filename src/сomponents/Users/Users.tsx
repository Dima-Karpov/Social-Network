import React from 'react';
import { UsersType } from '../../redux/users-reducer';
import s from './users.module.css'
import userPhoto from '..//..//assets/images/ava.png'
import { NavLink } from 'react-router-dom';
import { Paginator } from '../common/Paginator/Paginator';

type UsersFyncPropsType = {
    users: Array<UsersType>
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    totalUsersCount: number
    pageSize: number
    carrentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}

export const UsersFunc = (props: UsersFyncPropsType) => {

    return (
        <>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                currentPage={props.carrentPage} onPageChanged={props.onPageChanged} />
                
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'./profile/' + u.id}>
                            <img src={u.photos.small || userPhoto} className={s.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.unfollow(u.id);
                                }}>Unfollow</button> :
                            <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.follow(u.id);
                                }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </>

    )
}