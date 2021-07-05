import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { wihtAuthRedirect } from '../../hoc/wihtAuthRedirect';
import { getUsersProfile, ProfileType } from '../../redux/profile-reducer';
import { RootState } from '../../redux/redux-store';
import { Profile } from './Profile';
import s from './Profile.module.css';
import { compose } from 'redux';

type ProfileAPIContainerType = {
    profile: ProfileType
    getUsersProfile: (userID: number) => void
    history: any
    location: any
    match: any
    staticContext: any
    isAuth: boolean
}

class ProfileAPIContainer extends React.Component<ProfileAPIContainerType>{
    componentDidMount() {
        const userID = this.props.match.params.userId || 2;

        this.props.getUsersProfile(userID)
    }
    render() {
        return (
            <div className={s.descriptionBlock}>
                <Profile profile={this.props.profile} />
            </div>
        );
    }
};
 

let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
    }
};

export default compose(
    connect(mapStateToProps, { getUsersProfile }),
    withRouter,
    wihtAuthRedirect
    )(ProfileAPIContainer)



// {...this.props}