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

type ActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setCarrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof toggelIsFetchingAC>
    | ReturnType<typeof toggelInProgressAC>

export type InitialStateType = typeof initialState

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGEL_IS_FETCHING = 'TOGGEL-IS-FETCHING';
const TOGGEL_IN_FOLLOWING_PROGRESS = 'TOGGEK-IN-PROGRESS';

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 100,
    carrentPage: 1,
    isFeching: false,
    followingInProgress: [] as Array<number>,
};


const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case FOLLOW: {
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
        }
        case UNFOLLOW: {
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
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                carrentPage: action.carrentPage
            }
        }
        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                carrentPage: action.count
            }
        }
        case TOGGEL_IS_FETCHING: {
            return {
                ...state, isFeching: action.isFetching
            }
        }
        case TOGGEL_IN_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userID]
                : state.followingInProgress.filter(id => id !== action.userID)
            }
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
export const toggelIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGEL_IS_FETCHING,
        isFetching,
    } as const
}
export const toggelInProgressAC = (isFetching: boolean, userID: number) => {
    return {
        type: TOGGEL_IN_FOLLOWING_PROGRESS,
        isFetching,
        userID,
    } as const
}

export default usersReducer