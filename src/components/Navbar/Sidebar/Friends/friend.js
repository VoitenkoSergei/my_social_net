import React from 'react'
import classes from './friend.module.scss'
import { NavLink } from 'react-router-dom'

const Friend = ({ state }) => {
    return (
        <div className={classes.friends}>
            <NavLink
                to={`/friends/${state.id}`}
                activeClassName={classes.active}
                >
            <div className={classes.avatar}>
                <img src={state.url} alt={state.name} />
            </div>
            <div className={classes.name}>{state.name}</div>
            </NavLink>
        </div>
    )
}

export default Friend