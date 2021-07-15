import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { wihtAuthRedirect } from '../../hoc/wihtAuthRedirect';
import { getUsersProfile, ProfileType, updateStatus } from '../../redux/profile-reducer';
import { RootState } from '../../redux/redux-store';
import { Profile } from './Profile';
import s from './Profile.module.css';
import { compose } from 'redux';
import { getStatus } from './../../redux/profile-reducer';

type ProfileAPIContainerType = {
    profile: ProfileType
    getUsersProfile: (userID: number) => void
    getStatus: (userID: number) => void
    history: any
    location: any
    match: any
    staticContext: any
    isAuth: boolean
    status: string
    updateStatus: (status: string) => void
}

class ProfileAPIContainer extends React.Component<ProfileAPIContainerType>{
    componentDidMount() {
        const userID = this.props.match.params.userId || 17219;

        this.props.getUsersProfile(userID)
        this.props.getStatus(userID)
    }
    render() {
        return (
            <div className={s.descriptionBlock}>
                <Profile 
                profile={this.props.profile} 
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                />
            </div>
        );
    }
};
 

let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
};
export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
    withRouter,
    wihtAuthRedirect
    )(ProfileAPIContainer)



// {...this.props}