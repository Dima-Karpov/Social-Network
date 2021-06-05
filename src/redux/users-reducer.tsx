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
    ReturnType<typeof setUserAC> |
    ReturnType<typeof setCarrentPageAC> |
    ReturnType<typeof setTotalUserCountAC>

export type InitialStateType = typeof initialState


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USERS-COUNT';

const initialState = {
    users: [] as Array<UsersType>, 
    pageSize: 10,
    totalUsersCount: 100,
    carrentPage: 1,
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                carrentPage: action.carrentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                carrentPage: action.count
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
export const setCarrentPageAC = (carrentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        carrentPage,
    } as const
}
export const setTotalUserCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        count: totalUsersCount,
    } as const
}

export default usersReducer