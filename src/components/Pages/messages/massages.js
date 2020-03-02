import React, { createRef } from 'react'
import classes from './messages.module.scss'
import Dialog from './Dialog/dialog'
import ListItems from './ListItems/listItems'
import { Route } from 'react-router-dom'
import { addMessageActionCreator, changeMessageActionCreator } from './../../../States/state';

const Messages = ({ state, dispatch }) => {
    const newMessage = createRef()

    const sendMessage = () => dispatch( addMessageActionCreator() )

    const curentMessage = () => dispatch( changeMessageActionCreator( newMessage.current.value ))

    const nameElements = state.dialogs
        .map((item, index) => <ListItems key={index} state={item} />)

    const messageElements = state.messages
        .map((item, index) => <Route key={index} path="/messages/4"
            render={() => <Dialog state={item} />}
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
                        ref={newMessage}
                        value={state.currentMessage}
                        onChange={curentMessage}
                    />

                    <div className={classes.btn_send}>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages