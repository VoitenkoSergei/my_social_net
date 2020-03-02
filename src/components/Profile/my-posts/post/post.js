import React from 'react'
import classes from './post.module.scss'

const Post = ({url, text}) => {
    return (
        <div className={classes.main_post}>
            <div className={classes.img_avatar}>
                <img src={url} alt="avatar" />
            </div>
            <div className={classes.text_content}>{text}</div>
        </div>
    )
}

export default Post