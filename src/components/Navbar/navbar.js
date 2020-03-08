import React from 'react'
import classes from './navbar.module.scss'
import { NavLink } from 'react-router-dom'
import SidebarContainer from './Sidebar/sidebarContainer'

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <ul className={classes.list_item}>
                <li><NavLink exact to="/" activeClassName={classes.active}>Profile</NavLink></li>
                <li><NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink></li>
                <li><NavLink to="/users" activeClassName={classes.active}>Users</NavLink></li>
                <li><NavLink to="/news" activeClassName={classes.active}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></li>
                <li className={classes.friends}><NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink></li>
            </ul>
            <SidebarContainer />
        </div>
    )
}

export default Navbar