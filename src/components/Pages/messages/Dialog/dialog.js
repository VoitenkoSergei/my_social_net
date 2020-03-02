import React from 'react'
import classes from './dialog.module.scss'

const Dialog = ({ state }) => {
    let style = classes.messageItem;
    if (state.self) style = `${classes.messageItem} ${classes.messageRight}`
    return (
        <div className={style}>
            <span>{state.message}</span>
        </div>
    )
}

export default Dialog