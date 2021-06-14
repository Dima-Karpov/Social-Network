import React from 'react';
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store';
import { followAC, setCarrentPageAC, setTotalUserCountAC, setUserAC, toggelInProgressAC, toggelIsFetchingAC, unfollowAC, UsersType } from '../../redux/users-reducer';
import { UsersFunc } from './Users';
import { Preloader } from '../common/preloader/Preloader';
import { usersAPI } from '../../api/api';


export type UsersPageType = {
    users: Array<UsersType>
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCarrentPage: (carrentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggeleIsFetching: (isFetching: boolean) => void
    toggelInProgress: (isFetching: boolean, userID: number) => void
    totalUsersCount: number
    pageSize: number
    carrentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    
};
type UsersPageMapType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    carrentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
};

type MapStatePropsType = UsersPageMapType

class UsersComponent extends React.Component<UsersPageType> {
    componentDidMount() {
        this.props.toggeleIsFetching(true);
        usersAPI.getUsers(this.props.carrentPage, this.props.pageSize)
            .then(data => {
                this.props.toggeleIsFetching(false);
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
            })
    };
    onPageChanged = (pageNumber: number) => {
        this.props.toggeleIsFetching(true);
        this.props.setCarrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggeleIsFetching(false);
                this.props.setUsers(data.items)
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
                    toggelInProgress={this.props.toggelInProgress}
                    followingInProgress={this.props.followingInProgress}

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
        followingInProgress: state.usersPage.followingInProgress,
    }
};

export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUserAC,
    setCarrentPage: setCarrentPageAC,
    setTotalUserCount: setTotalUserCountAC,
    toggeleIsFetching: toggelIsFetchingAC,
    toggelInProgress: toggelInProgressAC,
})(UsersComponent)

