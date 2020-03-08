import React from 'react'
import UserProfile from './UserProfile/user-profile'
import classes from './profile.module.scss'
import MyPostsContainer from './my-posts/myPostContainer'

const Profile = () => {
    return (
        <div className={classes.main_content}>
            <div className={classes.bg_img}>
                <img src="https://media-exp1.licdn.com/dms/image/C4E1BAQEZeFr6ifzbbA/company-background_10000/0?e=2159024400&v=beta&t=1iun3SpVExAjJqufCUSngVTvEJCPFcb8V8dyQktBhHo" alt="social-network" />
            </div>
            <UserProfile />
            <MyPostsContainer />
        </div>
    )
}

export default Profile