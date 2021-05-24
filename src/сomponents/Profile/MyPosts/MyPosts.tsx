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
    addPost: () => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id} />);

    const newPostElement = React.createRef<HTMLTextAreaElement>(); // ссылка на HTML элемент 

    

    const onAddPost = ()  => {
        props.addPost()
    };

    const onPropsChange = () => {
        const text = newPostElement?.current?.value
        props.updateNewPostText(text || '')
    };

    const onKeyPressSendPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
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
            let action = changeNewTextAC(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC());
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)