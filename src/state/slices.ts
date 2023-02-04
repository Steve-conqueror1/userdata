import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { clearStore } from './actions';
import { AuthPayload } from '../types';

const authData = createSlice({
  name: 'authData',
  initialState: {
    name: '',
    email: '',
    given_name: '',
    family_name: '',
  },

  reducers: {
    setAuthData: (initialState, { payload }: PayloadAction<AuthPayload>) => ({
      ...initialState,
      ...payload,
    }),
  },

  extraReducers: {
    [clearStore.type]: () => ({
      name: '',
      email: '',
      given_name: '',
      family_name: '',
    }),
  },
});

export const { setAuthData } = authData.actions;

export default combineReducers({
  authData: authData.reducer,
});
