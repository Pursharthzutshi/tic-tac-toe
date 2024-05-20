import { configureStore } from "@reduxjs/toolkit";
import BoardSlicer from "../components/slicers/BoardSlicer";
// import counterSlice from "./slices/counter";

export const store = configureStore({
  reducer: {
    BoardSlicer:BoardSlicer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;