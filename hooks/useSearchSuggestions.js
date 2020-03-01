import { useState, useEffect } from "react";
import {
  SEARCH_MODE_WORK,
  SEARCH_MODE_HIRE
} from "../constants/search/searchModes";

import { HIRERS } from "../mock/hirers";
import { WORKERS } from "../mock/workers";

import { Suggestion } from "../models/search/Suggestion";
import {
  SUGGESTION_TYPE_WORKER,
  SUGGESTION_TYPE_HIRER
} from "../constants/search/suggestionTypes";
import { Worker } from "../models/user/Worker";
import { Hirer } from "../models/user/Hirer";

// These functions will be removed as soon as we have the backend
const searchHirers = searchKeyword => {
  return HIRERS.filter(
    h =>
      h.firstName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      h.lastName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      h.company.toLowerCase().includes(searchKeyword.toLowerCase())
  )
    .splice(0, 4)
    .map(
      h =>
        new Suggestion(
          SUGGESTION_TYPE_HIRER,
          new Hirer(h.firstName, h.lastName, h.company)
        )
    );
};
const searchWorkers = searchKeyword => {
  return WORKERS.filter(
    w =>
      w.firstName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      w.lastName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      w.profession.toLowerCase().includes(searchKeyword.toLowerCase())
  )
    .splice(0, 4)
    .map(
      w =>
        new Suggestion(
          SUGGESTION_TYPE_WORKER,
          new Worker(w.firstName, w.lastName, w.profession, w.profilePicture)
        )
    );
};

export const useSearchSuggestions = (searchKeyword, searchMode) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchKeyword.length === 0) {
      setSuggestions([]);
      return;
    }
    switch (searchMode) {
      case SEARCH_MODE_WORK:
        setSuggestions(searchHirers(searchKeyword));
        break;
      case SEARCH_MODE_HIRE:
        setSuggestions(searchWorkers(searchKeyword));
        break;
    }
  }, [searchKeyword, searchMode]);

  return [suggestions];
};
