import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counter_slice";
import usersReducer from "../slices/get_users_slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
