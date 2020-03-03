import React from 'react'
import classes from './my-posts.module.scss'
import Post from './post/post'

const MyPosts = (props) => {
    const onAddNewPost = () => props.currentPost()

    const onAddCurrentValue = e => props.currentValue( e.target.value )

    const postsElements = props.posts
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
                    value={props.value}
                    onChange={onAddCurrentValue} />

                <div className={classes.btn_post}>
                    <button onClick={onAddNewPost}>Post</button>
                </div>

            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts