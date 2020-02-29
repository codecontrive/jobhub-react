import { combineReducers } from "redux";
import jobReducer, { initialState as jobState } from "./jobReducers";

export const initialState = {
  job: jobState
};

export default combineReducers({
  jobReducer
});
