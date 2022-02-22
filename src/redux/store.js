import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from 'features/itemsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: '',
  },
});
