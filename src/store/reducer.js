import feedsReducer from "./feeds/reducer";
import { combineReducers } from "redux";
import postPageReducer from "./postPage/reducer";

const reducer = combineReducers({
  feeds: feedsReducer,
  postPage: postPageReducer,
});

export default reducer;
