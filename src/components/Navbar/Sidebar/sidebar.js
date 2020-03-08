import React from 'react'
import classes from './sidebar.module.scss'
import Friend from './Friends/friend'

const Sidebar = ({ friends }) => {
    
    const friendsItem = friends.map((item, index) => <Friend key={index} state={item} />)

    return (
        <div className={classes.sidebar}>
            <div className={classes.friends}>
                {friendsItem}
            </div>
        </div>
    )
}

export default Sidebar