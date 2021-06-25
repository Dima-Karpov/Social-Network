import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getUsersProfile, ProfileType } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Profile } from './Profile';
import s from './Profile.module.css';

type ProfileContainerType = {
    profile: ProfileType
    getUsersProfile: (userID: number) => void
    history: any
    location: any
    match: any
    staticContext: any
}

class ProfileAPIContainer extends React.Component<ProfileContainerType>{
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
}
let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }

};

let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer);

export default connect(mapStateToProps, { getUsersProfile })(WithUrlDataContainerComponent)

// {...this.props}