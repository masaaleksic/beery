import { combineReducers } from "redux";
import sessionReducer from "../redux/session/reducer";

const rootReducer = combineReducers({
    session: sessionReducer,
});

export default rootReducer;