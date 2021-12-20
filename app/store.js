import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../features/resumeSlice";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});
