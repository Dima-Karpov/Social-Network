import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { followAC, setUserAC, unfollowAC, UsersType } from '../../redux/users-reducer';
import s from './users.module.css'

export type UsersPageType = {
    users: Array<UsersType>
};

type MapStatePropsType = UsersPageType

type MapDispatchPropsType = {
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export const Users = (props: UsersPropsType) => {
    
    if (props.users.length === 0){
        props.setUsers([
            { id: 1, photoUrl: 'https://i.pinimg.com/originals/2e/d6/46/2ed6463a614f7a4ff5736454ac7290f8.png'
             , followed: true, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://i.pinimg.com/originals/2e/d6/46/2ed6463a614f7a4ff5736454ac7290f8.png'
             , followed: false, fullName: 'Natasha', status: 'I am a boss too', location: { city: 'Moskow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://i.pinimg.com/originals/2e/d6/46/2ed6463a614f7a4ff5736454ac7290f8.png'
             , followed: true, fullName: 'Any', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
        ] as Array<UsersType>,)
    } 
    
    return (
        <div>
           {props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <img src={u.photoUrl} className={s.userPhoto} />
                   </div>
                   <div>
                    {u.followed ?
                    <button 
                    onClick={() => {
                        props.unfollow(u.id)}}>Unfollow</button> : 
                    <button 
                    onClick = {() =>{
                        props.follow(u.id)}}>Follow</button>}
                   </div>
               </span>
               <span>
                   <span>
                       <div>
                           {u.fullName}
                       </div>
                       <div>
                           {u.status}
                       </div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>
               </span>
           </div> )}
        </div>

    )
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users 
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
        }
        
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)