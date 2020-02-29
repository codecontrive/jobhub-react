import { JOB_ADD } from "../../constants/actionTypes";

export const initialState = {
  jobs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case JOB_ADD:
      console.log("biciass");
      return state;
    default:
      return state;
  }
};
