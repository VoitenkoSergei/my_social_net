import React from 'react'
import classes from './messages.module.scss'
import Dialog from './Dialog/dialog'
import ListItems from './ListItems/listItems'
import { Route } from 'react-router-dom'

const Messages = ( props ) => {
    const onSendMessage = () => props.currentMessage() 

    const onAddCurrentValue = e => props.currentValue( e.target.value )

    const nameElements = props.dialogs
        .map((item, index) => 
        <ListItems key={index} state={item} />)

    const messageElements = props.messages
        .map((item, index) => 
        <Route key={index} path="/messages/4"
            render={ () => <Dialog state={item} /> }
        />)

    return (
        <div className={classes.messages}>
            <div className={classes.dialogsItem}>
                <ul>
                    {nameElements}
                </ul>
            </div>
            <div className={classes.messageItem}>
                <div className={classes.messageContainer}>
                    {messageElements}
                </div>
                <div className={classes.newMessage}>
                    <textarea
                        name="message"
                        id="mess-id"
                        cols="30"
                        rows="15"
                        placeholder="Write message..."
                        value={props.value}
                        onChange={onAddCurrentValue}
                    />

                    <div className={classes.btn_send}>
                        <button onClick={onSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages