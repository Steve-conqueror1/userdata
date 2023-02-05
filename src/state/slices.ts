import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { clearStore } from './actions';
import { AuthPayload, User } from '../types';

const authData = createSlice({
  name: 'authData',
  initialState: {
    name: '',
    email: '',
    given_name: '',
    family_name: '',
    sub: '',
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
      sub: '',
    }),
  },
});

const users = createSlice({
  name: 'users',
  initialState: [] as User[],
  reducers: {
    setUsers: (initialState, { payload }: PayloadAction<User[]>) => [
      ...initialState,
      ...payload,
    ],
  },
  extraReducers: {
    [clearStore.type]: () => [],
  },
});

export const { setAuthData } = authData.actions;
export const { setUsers } = users.actions;

export default combineReducers({
  authData: authData.reducer,
  users: users.reducer,
});
