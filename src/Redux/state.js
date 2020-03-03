/*import profilePageReducer from "./profilePageReducer"
import messagePageReducer from "./messagePageReducer"
import sidebarReducer from "./sidebarReducer"

const store = {
    _state: {
        profilePage: {
            posts: [
                {
                    url: "https://i.pinimg.com/originals/31/46/2d/31462dd2dace33ac03e1e2dfc0257784.jpg",
                    text: "This is a new post! Hello my name is Dog. Woof Woof!"
                },
                {
                    url: "https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg",
                    text: "Hello! My name is Bob!"
                },
                {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHqFjAOKelb7O3DzcACNByU8yR4MYsPdPQ-oOPDnkdiwgG5NFZ",
                    text: "It's my life It's now or never"
                },
                {
                    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JamesHetfield2012.jpg/250px-JamesHetfield2012.jpg",
                    text: "So gimme fuel, gimme fire, gimme that which I desire"
                }
            ],
            currentValue: ''
        },
        messagePage: {
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
        },
        sidebar: {
            friends: [
                { name: "Anna", url: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg", id: 3 },
                { name: "Sira", url: "https://i.pinimg.com/736x/60/15/56/6015565292fe172d5aa32b59a7a1e832.jpg", id: 4 },
                { name: "Mохнатка", url: "https://proxy11.online.ua/prikols/r2-d3/006/290/051/4ddf82ae56696.jpg", id: 5 }
            ]
        }
    },
    _callSubscriber: null,
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.messagePage = messagePageReducer(this._state.messagePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()

    }
}

export default store*/