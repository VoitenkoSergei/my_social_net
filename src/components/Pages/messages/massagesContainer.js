import React from 'react'
import { addMessageActionCreator, changeMessageActionCreator } from '../../../Redux/messagePageReducer';
import Messages from './massages';

const MessagesContainer = ({ store }) => {
    const state = store.getState()

    const sendMessage = () => store.dispatch( addMessageActionCreator() )

    const curentMessage = value => store.dispatch( changeMessageActionCreator( value ))

    return (<Messages 
        currentMessage={sendMessage} 
        currentValue={curentMessage}
        dialogs={state.messagePage.dialogs}
        messages={state.messagePage.messages}
        value={state.messagePage.currentMessage}
        />)
}

export default MessagesContainer