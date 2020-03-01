import { combineReducers } from "redux";
import jobReducer from "./jobReducers";

export default combineReducers({
  jobs: jobReducer
});
