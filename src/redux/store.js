import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from 'features/itemsSlice';
import filterSlice from 'features/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
