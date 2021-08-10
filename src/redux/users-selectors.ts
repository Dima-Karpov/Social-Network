import { RootState } from "./redux-store";


export const getUsers = (state: RootState) => {
    return state.usersPage.users;
};
export const getPageSize = (state: RootState) => {
    return state.usersPage.pageSize
};
export const getTotalUsersCount = (state: RootState) => {
    return state.usersPage.totalUsersCount
};
export const getCarrentPage = (state: RootState) => {
    return state.usersPage.carrentPage
};
export const getIsFetching = (state: RootState) => {
    return state.usersPage.isFeching
};
export const getFollowingInProgress = (state: RootState) => {
    return state.usersPage.followingInProgress
};