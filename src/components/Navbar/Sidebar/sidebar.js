import React from 'react'
import classes from './sidebar.module.scss'
import Friend from './Friends/friend'

const Sidebar = ({ store }) => {
    const state = store.getState()
    
    const friendsItem = state.sidebar.friends
        .map((item, index) => <Friend key={index} state={item} />)

    return (
        <div className={classes.sidebar}>
            <div className={classes.friends}>
                {friendsItem}
            </div>
        </div>
    )
}

export default Sidebar