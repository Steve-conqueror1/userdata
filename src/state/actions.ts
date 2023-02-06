import { createAction } from '@reduxjs/toolkit';
import { AuthPayload, Photo } from '../types';

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
export const updatePhotosApi = createAction<{ id: number; body: Photo }>(
  'updatePhotosApi'
);

export const getPhotoApi = createAction<{ id: number }>('getPhotoApi');
export const clearStore = createAction('clearStore');
