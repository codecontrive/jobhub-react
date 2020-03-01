import { useState } from "react";

export const useSearchSuggestions = searchKeyword => {
  const [suggestions, setSuggestions] = useState([]);
  console.log(searchKeyword);
  return [suggestions];
};
