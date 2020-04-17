import { createContext } from "react";

const GlobalContext = createContext({
  searchValue: "",
  searchList: [],
  savedLoaded: false,
  savedCount: 0,
  savedList: [],
});

export default GlobalContext;
