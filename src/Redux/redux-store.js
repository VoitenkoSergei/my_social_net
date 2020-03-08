import { createStore, combineReducers } from "redux";
import profilePageReducer from "./profilePageReducer"
import messagePageReducer from "./messagePageReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer";

const redusers = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

const store = createStore(redusers)

export default store