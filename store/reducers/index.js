import { combineReducers } from "redux";
import jobReducer, { initialState as jobState } from "./jobReducers";

export default combineReducers({
  jobs: jobReducer
});
