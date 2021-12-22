import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    personal: {},
    summary: "",
    workHistory: [],
    skills: [],
    education: [],
    projects: [],
    certifications: [],
  },
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addPersonal: (state, action) => {
      state.value.personal = action.payload;
    },
    addSummary: (state, action) => {
      state.value.summary = action.payload;
    },
  },
});

export const { addPersonal } = resumeSlice.actions;
export const { addSummary } = resumeSlice.actions;

export default resumeSlice.reducer;
