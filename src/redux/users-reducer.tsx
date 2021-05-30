import React from 'react';

type PhotosType = {
    small: null
    large: null
}
type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
};

type ActionType = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUserAC>

export type InitialStateType = typeof initialState


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: [] as Array<UsersType>
};


const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}

export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
};
export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
};
export const setUserAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
};

export default usersReducer