import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { followAC, setUserAC, unfollowAC, UsersType } from '../../redux/users-reducer';

import { UsersC } from './Users';

 type UsersPageType = {
    users: Array<UsersType>
};

type MapStatePropsType = UsersPageType

type MapDispatchPropsType = {
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: Array<UsersType>) => void
   
}



const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (usersID: number) => {
            dispatch(followAC(usersID))
        },
        unfollow: (usersID: number) => {
            dispatch(unfollowAC(usersID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUserAC(users))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)