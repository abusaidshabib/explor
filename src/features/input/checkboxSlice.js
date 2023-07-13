import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCheckboxes: [],
  analyticsData: []
};

const checkboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    toggleCheckbox: (state, action) => {
      const checkboxValue = action.payload;
      const checkboxIndex = state.selectedCheckboxes.indexOf(checkboxValue);

      if (checkboxIndex !== -1) {
        state.selectedCheckboxes.splice(checkboxIndex, 1);
      } else {

        state.selectedCheckboxes.push(checkboxValue);
      }
    },
    setData: (state, action) => {
      state.analyticsData.push(action.payload)
    }
  },
});

export const { toggleCheckbox, clearCheckboxes, setData } = checkboxSlice.actions;
export default checkboxSlice.reducer;


