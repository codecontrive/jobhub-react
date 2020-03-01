import { useState, useEffect } from "react";
import {
  SEARCH_MODE_WORK,
  SEARCH_MODE_HIRE
} from "../constants/search/searchModes";

export const useSearchSuggestions = (searchKeyword, searchMode) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    switch (searchMode) {
      case SEARCH_MODE_WORK:
        setSuggestions([]);
      case SEARCH_MODE_HIRE:
        setSuggestions([]);
    }
  }, [searchKeyword, searchMode]);

  return [suggestions];
};
