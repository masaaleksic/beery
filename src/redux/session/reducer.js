const initialState = {
    user: {
        isLoggedIn: false,
        isAdmin: false,
        username: ""
    }
}
const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_SESSION":
        return {
            ...state,
            user: {
                isLoggedIn: action.payload.session.isLoggedIn,
                isAdmin: action.payload.session.isAdmin,
                username: action.payload.session.username
            }
        }
    }
    return state;
}

export default sessionReducer;