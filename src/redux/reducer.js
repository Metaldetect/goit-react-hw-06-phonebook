import { combineReducers } from '@reduxjs/toolkit';
import contactSlice from './contactSlice';
import filterSlice from './filterSlice';

export const reducer = combineReducers({
  contactSlice,
  filterSlice,
});
