import { JOB_ADD } from "../../constants/actionTypes";
import { Job } from "../../models/Job";

export const jobAdd = job => {
  return {
    type: JOB_ADD,
    payload: job
  };
};
