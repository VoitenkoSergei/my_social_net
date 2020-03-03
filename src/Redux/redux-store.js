import { createStore, combineReducers } from "redux";
import profilePageReducer from "./profilePageReducer"
import messagePageReducer from "./messagePageReducer"
import sidebarReducer from "./sidebarReducer"

const redusers = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    sidebar: sidebarReducer
})

const store = createStore(redusers)

export default store