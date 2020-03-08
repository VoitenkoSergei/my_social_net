const ADD_POST = "ADD_POST"
const CHANGE_POST = "CHANGE-POST"

const initialState = {
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
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.currentValue.trim()) {
                const post = {
                    url: "https://www.economicusgame.com/storage/testimonials/186344/ecd5f29ff548715dc855639ffecfdfb7.png",
                    text: state.currentValue
                }
                return {
                    ...state,
                    posts: [...state.posts, post],
                    currentValue: ''
                }
            }
            else return state
        case CHANGE_POST:
            return { ...state, currentValue: action.value }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const changePostActionCreator = currentValue => ({
    type: CHANGE_POST,
    value: currentValue
})

export default profilePageReducer