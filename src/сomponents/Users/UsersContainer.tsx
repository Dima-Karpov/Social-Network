import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { followAC, setCarrentPageAC, setTotalUserCountAC, setUserAC, unfollowAC, UsersType } from '../../redux/users-reducer';
import axios from 'axios';
import { UsersFunc } from './Users';

export type UsersPageType = {
    users: Array<UsersType>
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCarrentPage: (carrentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    totalUsersCount: number
    pageSize: number
    carrentPage: number
}
type UsersPageMapType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    carrentPage: number
};

type MapStatePropsType = UsersPageMapType

type MapDispatchPropsType = {
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCarrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void

}
class UsersComponent extends React.Component<UsersPageType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${this.props.carrentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCarrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {

        return <UsersFunc
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            carrentPage={this.props.carrentPage}

        />

    };
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        carrentPage: state.usersPage.carrentPage,
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
        },
        setCarrentPage: (pageNumber: number) => {
            dispatch(setCarrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountAC(totalCount))
        },

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)