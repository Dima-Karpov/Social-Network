import React from 'react';
import { UsersType } from '../../redux/users-reducer';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';

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

export const UsersFunc: React.FC<UsersFyncPropsType> = React.memo(props => {

    const {
        users,
        follow,
        unfollow,
        totalUsersCount,
        pageSize,
        carrentPage,
        onPageChanged,
        followingInProgress,
    } = props;

    return (
        <>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                currentPage={carrentPage} onPageChanged={onPageChanged} />
            <div>
                {users.map(u => <User
                    key={u.id}
                    user={u}
                    follow={follow}
                    unfollow={unfollow}
                    followingInProgress={followingInProgress}
                />)}

            </div>
        </>

    )
});