import { ThunkAction } from 'redux-thunk'
import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/helpers/object-helpers';
import { AppStateType } from './redux-store';

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

type ActionType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCarrentPageAC>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggelIsFetching>
    | ReturnType<typeof toggelInProgress>

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
    pageSize: 25,
    totalUsersCount: 2000,
    carrentPage: 1,
    isFeching: false,
    followingInProgress: [] as Array<number>
};


const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', { followed: true })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', { followed: false })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            console.log(action)
            return {
                ...state,
                carrentPage: action.carrentPage
            }
        }
        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
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

export const follow = (userID: number) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
};
export const unfollow = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
};
export const setUsers = (users: Array<UsersType>) => {
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
export const setTotalUserCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUsersCount,
    } as const
}
export const toggelIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGEL_IS_FETCHING,
        isFetching,
    } as const
}
export const toggelInProgress = (isFetching: boolean, userID: number) => {
    return {
        type: TOGGEL_IN_FOLLOWING_PROGRESS,
        isFetching,
        userID,
    } as const
}



export const getUsersThunkCreator = (page: number, pageSize: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {
        dispatch(toggelIsFetching(true));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggelIsFetching(false));
        dispatch(setUsers(data.items))
        dispatch(setCarrentPageAC(page))
    }

};


export const followThunkCreator = (usersID: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {
        dispatch(toggelInProgress(true, usersID));
        let response = await usersAPI.follow(usersID);
        if (response.data.resultCode === 0) {
            dispatch(follow(usersID));
        }
        dispatch(toggelInProgress(false, usersID));
    }
};

export const unFollowThunkCreator = (usersID: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {
        dispatch(toggelInProgress(true, usersID));
        let response = await usersAPI.unfollow(usersID);
        if (response.data.resultCode === 0) {
            dispatch(unfollow(usersID));
        }
        dispatch(toggelInProgress(false, usersID));
    }
};

export default usersReducer