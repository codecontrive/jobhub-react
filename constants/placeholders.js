import { SEARCH_MODE_WORK, SEARCH_MODE_HIRE } from "./search/searchModes";

export const homeSearchInputPlaceholder = (searchMode = SEARCH_MODE_WORK) => {
  switch (searchMode) {
    case SEARCH_MODE_WORK:
      return "Search hirers..";
    case SEARCH_MODE_HIRE:
      return "Search workers..";
  }
};
