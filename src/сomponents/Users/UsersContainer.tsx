import React from 'react';
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store';
import { follow, setCarrentPageAC, toggelInProgress, unfollow, UsersType, getUsersThunkCreator } from '../../redux/users-reducer';
import { UsersFunc } from './Users';
import { Preloader } from '../common/preloader/Preloader';
import { wihtAuthRedirect } from '../../hoc/wihtAuthRedirect';
import { compose } from 'redux';


export type UsersPageType = {
    users: Array<UsersType>
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
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
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    carrentPage={this.props.carrentPage}
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
export default compose<React.ComponentType>(
    (connect(mapStateToProps, {
        follow,
        unfollow,
        setCarrentPage: setCarrentPageAC,
        toggelInProgress,
        getUsersThunkCreator,
    
    })),
    wihtAuthRedirect
)(UsersComponent)
