import React from 'react';
import { connect } from 'react-redux'
import { RootState } from '../../redux/redux-store';
import { setCarrentPageAC, toggelInProgress, UsersType, getUsersThunkCreator, followThunkCreator, unFollowThunkCreator } from '../../redux/users-reducer';
import { UsersFunc } from './Users';
import { Preloader } from '../common/preloader/Preloader';
import { compose } from 'redux';
import { getCarrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';


export type UsersPageType = {
    users: Array<UsersType>
    followThunkCreator: (usersID: number) => void
    unFollowThunkCreator: (usersID: number) => void
    setCarrentPage: (carrentPage: number) => void
    toggelInProgress: (isFetching: boolean, userID: number) => void
    totalUsersCount: number
    pageSize: number
    carrentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void

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
        this.props.getUsersThunkCreator(this.props.carrentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
                    unfollow={this.props.unFollowThunkCreator}
                    follow={this.props.followThunkCreator}
                    carrentPage={this.props.carrentPage}
                    followingInProgress={this.props.followingInProgress}

                />
            </>
        )
    };
};

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        carrentPage: getCarrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};


export default compose<React.ComponentType>(
    (connect(mapStateToProps, {
        followThunkCreator,
        unFollowThunkCreator,
        setCarrentPage: setCarrentPageAC,
        toggelInProgress,
        getUsersThunkCreator,

    })),
)(UsersComponent);