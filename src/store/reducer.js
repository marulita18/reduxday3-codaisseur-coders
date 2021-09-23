import feedsReducer from "./feeds/reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  feeds: feedsReducer,
});

export default reducer;
