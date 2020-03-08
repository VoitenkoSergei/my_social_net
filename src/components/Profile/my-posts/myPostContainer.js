// import React from 'react'
import { addPostActionCreator, changePostActionCreator } from '../../../Redux/profilePageReducer';
import MyPosts from './my-posts';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {

//     return (
//         <storeContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState()

//                     const addNewPost = () => store.dispatch(addPostActionCreator())

//                     const addCurrentValue = value => store.dispatch(changePostActionCreator(value))
//                     return <MyPosts
//                         currentPost={addNewPost}
//                         currentValue={addCurrentValue}
//                         posts={state.profilePage.posts}
//                         value={state.profilePage.currentValue}
//                     />
//                 }
//             }
//         </storeContext.Consumer>
//     )
// }
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.currentValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        currentPost: () => dispatch(addPostActionCreator()),
        currentValue: value => dispatch(changePostActionCreator(value))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer