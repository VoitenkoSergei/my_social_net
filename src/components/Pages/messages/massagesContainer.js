// import React from 'react'
import { addMessageActionCreator, changeMessageActionCreator } from '../../../Redux/messagePageReducer';
import Messages from './massages';
import { connect } from 'react-redux';

// const MessagesContainer = () => {

//     return (
//         <storeContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState()

//                     const sendMessage = () => store.dispatch(addMessageActionCreator())

//                     const curentMessage = value => store.dispatch(changeMessageActionCreator(value))
//                     return <Messages
//                         currentMessage={sendMessage}
//                         currentValue={curentMessage}
//                         dialogs={state.messagePage.dialogs}
//                         messages={state.messagePage.messages}
//                         value={state.messagePage.currentMessage}
//                     />
//                 }
//             }
//         </storeContext.Consumer>
//     )
// }
const mapStateToProps = state => (
    {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        value: state.messagePage.currentMessage
    }
)

const mapDispatchToProps = dispatch => (
    {
        currentMessage: () => dispatch(addMessageActionCreator()),
        currentValue: value => dispatch(changeMessageActionCreator(value))
    }
)
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer