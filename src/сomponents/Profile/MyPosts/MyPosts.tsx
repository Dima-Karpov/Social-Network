import React, { KeyboardEvent } from 'react';
import { addPostAC, changeNewTextAC, PostsType } from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { Dispatch } from 'redux';
import { connect } from 'react-redux'

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
};

type MapStatePropsType = ProfilePageType

type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);

    const newPostElement = React.createRef<any>(); // ссылка на HTML элемент 

    const text = newPostElement?.current?.value

    const onAddPost = () => {
        props.addPost(text)
    };

    const onPropsChange = () => {
        props.updateNewPostText(text || '')
    };

    const onKeyPressSendPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            onAddPost()
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPropsChange}
                        onKeyPress={onKeyPressSendPost}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = changeNewTextAC(text || '')
            dispatch(action)
        },
        addPost: (text: string) => {
            dispatch(addPostAC(text));
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)