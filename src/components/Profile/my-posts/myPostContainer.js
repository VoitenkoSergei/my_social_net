import React from 'react'
import { addPostActionCreator, changePostActionCreator } from '../../../Redux/profilePageReducer';
import MyPosts from './my-posts';

const MyPostsContainer = ({ store }) => {
    const state = store.getState()

    const addNewPost = () => store.dispatch(addPostActionCreator())

    const addCurrentValue = value => store.dispatch(changePostActionCreator(value))

    return (<MyPosts 
        currentPost={addNewPost} 
        currentValue={addCurrentValue} 
        posts={state.profilePage.posts} 
        value={state.profilePage.currentValue}
        />)
}

export default MyPostsContainer