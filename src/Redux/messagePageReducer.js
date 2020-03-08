const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_MESSAGE = "CHANGE-MESSAGE"

const initialState = {
    dialogs: [
        { name: "Oleg", id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkp9qe9Bff2GUpDv68j1Y-eBwWEV0tdZCb1QM5PVP57djs2pvH" },
        { name: "Serhii", id: 2, url: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" },
        { name: "Anna", id: 3, url: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" },
        { name: "Sira", id: 4, url: "https://i.pinimg.com/736x/60/15/56/6015565292fe172d5aa32b59a7a1e832.jpg" },
        { name: "мохнатка", id: 5, url: "https://proxy11.online.ua/prikols/r2-d3/006/290/051/4ddf82ae56696.jpg" }
    ],
    messages: [
        { message: "Hello!" },
        { message: "My name is Sira!" },
        { message: "Hello Sira!", self: true },
        { message: "I like a fish!!!" },
        { message: "OK Sira! I will give you fish, now!", self: true },
        { message: "Mur Mur!" },
        { message: "Yea! I'm glad you liked it!", self: true }
    ],
    currentMessage: ''
}

const messagePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.currentMessage.trim()) {
                const newMessage = {
                    message: state.currentMessage,
                    self: true
                }
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    currentMessage: ''
                }
            }
            else return state
        case CHANGE_MESSAGE:
            return {
                ...state,
                currentMessage: action.message
            }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const changeMessageActionCreator = (curentValue) => ({
    type: CHANGE_MESSAGE,
    message: curentValue
})

export default messagePageReducer