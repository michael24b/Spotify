import { configureStore } from "@reduxjs/toolkit";

import searchValue from "./search-value";

const store = configureStore({
  reducer: { sv: searchValue.reducer },
});

export default store;
