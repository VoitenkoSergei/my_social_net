import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './listItems.module.scss'

const ListItems = ({ state }) => {
    return (
        <li className={classes.item}>
            <NavLink
                to={`/messages/${state.id}`}
                activeClassName={classes.active}
                >
                <div className={classes.avatar}>
                    <img src={state.url} alt={state.name} />
                </div>
                {state.name}
            </NavLink>
        </li>
    )
}

export default ListItems