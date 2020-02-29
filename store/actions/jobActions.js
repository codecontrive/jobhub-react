import { JOB_ADD } from "../../constants/actionTypes";

export const jobAdd = job => {
  return {
    type: JOB_ADD,
    payload: job
  };
};
