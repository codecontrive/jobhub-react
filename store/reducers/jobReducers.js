import { JOB_ADD } from "../../constants/actionTypes";
import { Job } from "../../models/Job";

export const initialState = {
  jobs: [
    new Job(1, "Worker"),
    new Job(2, "Cleaner"),
    new Job(3, "Programmer"),
    new Job(4, "Driver"),
    new Job(5, "Idiot")
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case JOB_ADD:
      const oState = { ...state };
      oState.jobs.push(action.payload);
      return { ...oState };
    default:
      return state;
  }
};
