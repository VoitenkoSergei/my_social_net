import React from 'react'
import classes from './users.module.scss'

const Users = (props) => {
    return (
        <div className={classes.users}>
            {props.users.map(user => 
            <div key={user.id} className={classes.user}>
                <div>
                    <div className={classes.avatar}><img src={user.url} alt={user.fullName}/></div>
                    <div className={classes.btn}>
                        {
                            user.followed
                                ? <button onClick={() => props.unfollow(user.id)}> Unfollow </button>
                                : <button onClick={() => props.follow(user.id)}> Follow </button>
                        }
                    </div>
                </div>
                <div className={classes.description}>
                    <div className={classes.name}>Name: {user.fullName}</div>
                    <div className={classes.status}>Status: {user.status}</div>
                    <div className={classes.city}>City: {user.location.city} </div>
                    <div className={classes.country}>Country: {user.location.country}</div>
                </div>

            </div>)}
        </div>
    )
}

export default Users