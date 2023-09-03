import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterContact } = filterSlice.actions;

export default filterSlice.reducer;
