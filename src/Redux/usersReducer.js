const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

const initialState = {
    users: [
        {
            id: 3, fullName: "Anna", url: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",
            followed: true, status: 'Hello, my name is Anna', location: { city: 'Zaporozhie', country: 'Ukraine' }
        },
        {
            id: 4, fullName: "Sira", url: "https://i.pinimg.com/736x/60/15/56/6015565292fe172d5aa32b59a7a1e832.jpg",
            followed: true, status: 'Mur-mur, my name is Sira', location: { city: 'Box', country: 'Ukraine' }
        },
        {
            id: 5, fullName: "Mохнатка", url: "https://proxy11.online.ua/prikols/r2-d3/006/290/051/4ddf82ae56696.jpg",
            followed: true, status: 'I\'m not a forest, my name is Mохнатка', location: { city: 'Rovno', country: 'Ukraine' }
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.userID) return {...user, followed: true}
                    return user
                })
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.userID) return { ...user, followed: false}
                    return user
                })
            }
        default:
            return state
    }
}

export const followCreator = (id) => ({
    type: FOLLOW,
    userID: id
})
export const unFollowCreator = (id) => ({
    type: UNFOLLOW,
    userID: id
})

export default usersReducer