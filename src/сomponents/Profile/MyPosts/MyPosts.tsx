import React, { ChangeEvent } from 'react';
import { ActionType, addPostAC, changeNewTextAC, PostsType} from './/..//..//..//redux/state';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';


type PropsType = {
    state: Array<PostsType>
    newPostText: string 
    dispatch: (action: ActionType) => void

};

export const MyPosts = (props: PropsType) => {

    let postsElement =
        props.state.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef<HTMLTextAreaElement>(); // ссылка на HTML элемент 
    

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText));
    };

    const onPropsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = newPostElement?.current?.value
        // let action = {type : 'UPDATE-NEW-POST-TEXT', newText: text || ''}
        props.dispatch(changeNewTextAC(text || ''));
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