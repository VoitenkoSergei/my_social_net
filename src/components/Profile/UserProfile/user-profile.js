import React from 'react'
import classes from './user-profile.module.scss'

const UserProfile = () => {
    return (
        <div className={classes.user_list}>
            <div className={classes.avatar_img}>
                <img src="https://cs16planet.ru/steam-avatars/images/avatar2700.jpg" alt="avatar" />
            </div>
            <div className={classes.user_description}>
                <h3>Name: Rick</h3>
                <div>Date of Birthd: 21 jan</div>
                <div>City: New-York</div>
                <div>Education: ZNTU'15</div>
                <div>Web-site: www.Rick-Morty.com</div>
            </div>
        </div>
    )
}

export default UserProfile