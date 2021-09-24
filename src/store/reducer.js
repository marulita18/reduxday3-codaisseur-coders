import { combineReducers } from "redux";
import feedsReducer from "./feeds/reducer";
import postPageReducer from "./postPage/reducer";
import authReducer from "./auth/reducer";

const reducer = combineReducers({
  feeds: feedsReducer,
  postPage: postPageReducer,
  auth: authReducer,
});

export default reducer;
