import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ProfileType, setUsersProfile } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Profile } from './Profile';
import s from './Profile.module.css';

type ProfileContainerType = {
    profile: ProfileType
    setUsersProfile: (profile: ProfileType) => void
    history: any
    location: any
    match: any
    staticContext: any
}


class ProfileAPIContainer extends React.Component<ProfileContainerType>{
    componentDidMount(){
        const user_Id = this.props.match.params.userId || 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${user_Id}`)
        .then(response => {
            this.props.setUsersProfile(response.data)
        })
    }
    render() {
        return (
            <div className={s.descriptionBlock}>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}
let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile 
    }
    
}
// @ts-ignore
export default  connect(mapStateToProps, {setUsersProfile})(withRouter(ProfileAPIContainer))

// {...this.props}