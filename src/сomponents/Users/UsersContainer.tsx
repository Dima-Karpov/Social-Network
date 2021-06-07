import React from 'react';
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store';
import { followAC, setCarrentPageAC, setTotalUserCountAC, setUserAC, toggelIsFetchingAC, unfollowAC, UsersType } from '../../redux/users-reducer';
import axios from 'axios';
import { UsersFunc } from './Users';
import { Preloader } from '../common/preloader/Preloader';

export type UsersPageType = {
    users: Array<UsersType>
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCarrentPage: (carrentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggeleIsFetching: (isFetching: boolean) => void
    totalUsersCount: number
    pageSize: number
    carrentPage: number
    isFetching: boolean
};
type UsersPageMapType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    carrentPage: number
    isFetching: boolean
};

type MapStatePropsType = UsersPageMapType

class UsersComponent extends React.Component<UsersPageType> {
    componentDidMount() {
        this.props.toggeleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${this.props.carrentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggeleIsFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    };
    onPageChanged = (pageNumber: number) => {
        this.props.toggeleIsFetching(true);
        this.props.setCarrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggeleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    };
    render() {

        return (
            <>
               {this.props.isFetching ? <Preloader /> : null}
                <UsersFunc
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    carrentPage={this.props.carrentPage}
                />
            </>
        )
    };
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        carrentPage: state.usersPage.carrentPage,
        isFetching: state.usersPage.isFeching,
    }
};

export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUserAC,
    setCarrentPage: setCarrentPageAC,
    setTotalUserCount: setTotalUserCountAC,
    toggeleIsFetching: toggelIsFetchingAC,
})(UsersComponent)

