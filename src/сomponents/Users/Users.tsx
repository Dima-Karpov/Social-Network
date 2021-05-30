import React from 'react';
import userPhoto from '..//..//assets/images/ava.png'
import s from './users.module.css'
import { UsersType } from '../../redux/users-reducer';
import axios from 'axios';

export type UsersPageType = {
    users: Array<UsersType>
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export class UsersC extends React.Component<UsersPageType> {
    
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0//users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render(){
        return (
            <div>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small || userPhoto} className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed ?
                                <button
                                    onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button> :
                                <button
                                    onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)}
            </div>
    
        )
    };
}
