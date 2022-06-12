import { combineReducers } from "redux";
import sessionReducer from "../redux/session/reducer";
import displayModeReducer from "../redux/displayMode/reducer";

const rootReducer = combineReducers({
    displayMode: displayModeReducer,
    session: sessionReducer
});

export default rootReducer;