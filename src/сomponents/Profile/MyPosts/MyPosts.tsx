import React, { ChangeEvent } from 'react';
import { PostsType } from './/..//..//..//redux/state';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';


type PropsType = {
    state: Array<PostsType>
    addPost: (newPostText: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
};

export const MyPosts = (props: PropsType) => {

    let postsElement =
        props.state.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef<HTMLTextAreaElement>(); // ссылка на HTML элемент 

    const addPost = () => {
        props.addPost(props.newPostText);
    };

    const onPropsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = newPostElement?.current?.value
        props.updateNewPostText(text || '');
    };

    return (
        <div className={s.postsBlock}>


            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPropsChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}