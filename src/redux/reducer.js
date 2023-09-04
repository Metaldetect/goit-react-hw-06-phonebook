import { combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});

export default rootReducer;
