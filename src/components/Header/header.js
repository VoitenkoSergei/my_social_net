import React from 'react'
import classes from './header.module.scss'

const Header = () => {
    return (
        <header className={classes.main_header}>
            <div className={classes.img_logo}>
                <img src="https://static.base64.guru/img/logo.png" alt="logo" />
            </div>
            <h1>This is header</h1>
        </header>
    )
}

export default Header