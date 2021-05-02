import React from 'react';
import { PostsType } from '../../../../redux/state';
import s from './Post.module.css';




export const Post = (props: PostsType) => {
    return (
        <div className={s.item}>
            <img src='https://avatars.mds.yandex.net/get-zen_doc/203431/pub_5c5175b4a1502300ad0f4cb2_5c517c5e463db200ae6546dd/scale_1200' />
            {props.message}
            <div>
                <span className={s.itemLike}> 
                    like
                    { props.likesCount}
                    </span>
            </div>
        </div>
    );
}       