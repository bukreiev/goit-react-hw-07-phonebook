import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    });

    builder.addCase(deleteContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
      state.error = null;
    });
    builder.addCase(addContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addMatcher(isRejectedAction, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
