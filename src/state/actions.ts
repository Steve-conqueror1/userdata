import { createAction } from '@reduxjs/toolkit';
import { AuthPayload } from '../types';

export const loginUser = createAction<AuthPayload>('loginUser');
export const getUsersApi = createAction('getUsersApi');
export const getUserApi = createAction<string>('getUserApi');
export const getAlbumApi = createAction('getAlbumApi');
export const getPhotoApi = createAction('getPhotoApi');
export const clearStore = createAction('clearStore');
