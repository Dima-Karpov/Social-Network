import React, { } from 'react';
import { addPostAC, changeNewTextAC, PostsType } from '../../../redux/profile-reducer';
import {connect} from 'react-redux'
import { Dispatch } from 'redux';
import { MyPosts } from './MyPosts';
import { AppStateType } from '../../../redux/redux-store';

// type MapStatePropsType = {
//     posts: Array<PostsType>
//     newPostText: string
// }

// type MapDispatchPropsType = {
//     updateNewPostText: (text: string) => void
//     addPost: (text: string) => void
// }

// export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

// const mapStateToProps = (state: AppStateType ): MapStatePropsType   => {
//     return {
//         posts: state.profilePage.posts,
//         newPostText: state.profilePage.newPostText
//     }
// }
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//         return {
//             updateNewPostText : (text: string) => {
//                 let action = changeNewTextAC(text || '')
//                 dispatch(action)
//             },
//             addPost : (text: string) => {
//                 dispatch(addPostAC(text));
//             }
//         }
//     }

// export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)