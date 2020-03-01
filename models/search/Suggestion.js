import { SUGGESTION_TYPE_WORKER } from "../../constants/search/suggestionTypes";
import { Worker } from "../user/Worker";

export class Suggestion {
  constructor(type = SUGGESTION_TYPE_WORKER, model) {
    this.type = type;
    this.model = model;
  }
}
