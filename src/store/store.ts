import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/counter_slice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
