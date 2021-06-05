import React from 'react';
import { UsersType } from '../../redux/users-reducer';
import s from './users.module.css'
import userPhoto from '..//..//assets/images/ava.png'

type UsersFyncPropsType = {
    users: Array<UsersType>
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    totalUsersCount: number
    pageSize: number
    carrentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const UsersFunc = (props: UsersFyncPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <>
            <div className={s.pageUsers}>
                {pages.map(p => {
                    return (
                        <span
                            // @ts-ignore
                            className={props.carrentPage === p && s.selectedPage}
                            onClick={(e) => { props.onPageChanged(p) }}
                        >{p}</span>
                    )
                })}

            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small || userPhoto} className={s.userPhoto} />
                    </div>
                    <div>
                        {u.followed ?
                            <button
                                onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button> :
                            <button
                                onClick={() => {
                                    props.follow(u.id)
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