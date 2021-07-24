import React, { KeyboardEvent } from 'react';
import { addPostAC, PostsType } from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { Dispatch } from 'redux';
import { connect } from 'react-redux'
import { AddMyPostFromRedux } from './AddMyPostForm';

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
};

type MapStatePropsType = ProfilePageType

type MapDispatchPropsType = {
    addPost: (newPostElement: string) => void
};

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id} />);

    const newPostElement = React.createRef<HTMLTextAreaElement>(); // ссылка на HTML элемент 

    // const onKeyPressSendPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.key === 'Enter') {
    //     }
    // };

    const addNewMyPost = (values: any) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
                    <AddMyPostFromRedux onSubmit={addNewMyPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText));
        }
    }
};


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);