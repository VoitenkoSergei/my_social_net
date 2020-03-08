// import React from 'react'
import Sidebar from './sidebar'
import { connect } from 'react-redux'

// const SidebarContainer = () => {

//     return (
//         <storeContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState()
//                     return <Sidebar friends={state.sidebar.friends} />
//                 }
//             }
//         </storeContext.Consumer>
//     )
// }
const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        
    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer