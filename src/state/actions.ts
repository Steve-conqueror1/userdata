import { createAction } from '@reduxjs/toolkit';
import { AuthPayload } from '../types';

export const loginUser = createAction<AuthPayload>('loginUser');
export const getUsersApi = createAction('getUsersApi');
export const getUserApi = createAction<{ userId: number }>('getUserApi');
export const getUserAlbumsApi = createAction<{ userId: number }>(
  'getUserAlbumsApi'
);
export const getAlbumsApi = createAction('getAlbumsApi');
export const getAlbumApi = createAction<{ albumId: number }>('getAlbumApi');
export const getAlbumPhotosApi = createAction<{ albumId: number }>(
  'getAlbumPhotosApi'
);

export const getPhotoApi = createAction<{ id: number }>('getPhotoApi');
export const clearStore = createAction('clearStore');
