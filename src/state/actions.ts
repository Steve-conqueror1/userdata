import { createAction } from '@reduxjs/toolkit';
import { AuthPayload } from '../types';

export const loginUser = createAction<AuthPayload>('loginUser');
export const getUsersApi = createAction('getUsersApi');
export const getUserApi = createAction<{ userId: number }>('getUserApi');
export const getUserAlbumsApi = createAction<{ userId: number }>(
  'getUserAlbumsApi'
);
export const getAlbumsApi = createAction('getAlbumsApi');
export const getPhotoApi = createAction('getPhotoApi');
export const clearStore = createAction('clearStore');
