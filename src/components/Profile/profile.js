import React from 'react'
import UserProfile from './UserProfile/user-profile'
import MyPosts from './my-posts/my-posts'
import classes from './profile.module.scss'

const Profile = ({state, dispatch}) => {
    return (
        <div className={classes.main_content}>
            <div className={classes.bg_img}>
                <img src="https://media-exp1.licdn.com/dms/image/C4E1BAQEZeFr6ifzbbA/company-background_10000/0?e=2159024400&v=beta&t=1iun3SpVExAjJqufCUSngVTvEJCPFcb8V8dyQktBhHo" alt="social-network" />
            </div>
            <UserProfile />
            <MyPosts state={state} dispatch={dispatch} />
        </div>
    )
}

export default Profile