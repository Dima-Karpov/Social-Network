import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { getUsersProfile, ProfileType } from '../../redux/profile-reducer';
import { RootState } from '../../redux/redux-store';
import { Profile } from './Profile';
import s from './Profile.module.css';

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

        if(this.props.isAuth === false) {
            return <Redirect to='/login'/>
        }
        return (
            <div className={s.descriptionBlock}>
                <Profile profile={this.props.profile} />
            </div>
        );
    }
}
let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }

};

let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer);

export default connect(mapStateToProps, { getUsersProfile })(WithUrlDataContainerComponent)

// {...this.props}