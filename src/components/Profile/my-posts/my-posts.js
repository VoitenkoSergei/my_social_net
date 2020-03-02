import React, { createRef } from 'react'
import classes from './my-posts.module.scss'
import Post from './post/post'
import { addPostActionCreator, changePostActionCreator } from '../../../States/state';

const MyPosts = ({ state, dispatch }) => {
    const newPost = createRef();

    const addNewPost = () => dispatch(addPostActionCreator())

    const addCurrentValue = () => dispatch(changePostActionCreator(newPost.current.value))

    const postsElements = state.posts
        .map((item, index) => <Post key={index} url={item.url} text={item.text} />)

    return (
        <div className={classes.main_post}>
            <div className={classes.my_post}>My posts</div>
            <div className={classes.block_post}>
                <textarea
                    name="coment"
                    id="com-id"
                    cols="30"
                    rows="15"
                    placeholder="you news..."
                    ref={newPost}
                    value={state.currentValue}
                    onChange={addCurrentValue} />

                <div className={classes.btn_post}>
                    <button onClick={addNewPost}>Post</button>
                </div>

            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts