const initialState = {
    isDarkMode: false
}

const displayModeReducer = ( state = initialState, action) => {
    switch(action.type) {
        case "SET_DISPLAY_MODE":
        return {
            ...state,
            isDarkMode: action.payload.displayMode.isDarkMode
        }
    }
    return state;
};

export default displayModeReducer;