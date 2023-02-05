import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { clearStore } from './actions';
import { Album, AuthPayload, Photo, User } from '../types';

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

const albums = createSlice({
  name: 'albums',
  initialState: [] as Album[],
  reducers: {
    setAlbums: (initialState, { payload }: PayloadAction<Album[]>) => [
      ...initialState,
      ...payload,
    ],
  },
  extraReducers: {
    [clearStore.type]: () => [],
  },
});

const user = createSlice({
  name: 'user',
  initialState: {} as User,
  reducers: {
    setUser: (initialState, { payload }: PayloadAction<User>) => ({
      ...initialState,
      ...payload,
    }),
  },
  extraReducers: {
    [clearStore.type]: () => ({} as User),
  },
});

const userAlbums = createSlice({
  name: 'userAlbums',
  initialState: [] as Album[],
  reducers: {
    setUserAlbums: (initialState, { payload }: PayloadAction<Album[]>) => [
      ...initialState,
      ...payload,
    ],
  },
  extraReducers: {
    [clearStore.type]: () => [],
  },
});

const album = createSlice({
  name: 'album',
  initialState: {
    id: 0,
    userId: 0,
    title: '',
  },
  reducers: {
    setAlbum: (initialState, { payload }: PayloadAction<Album>) => ({
      ...initialState,
      ...payload,
    }),
  },
  extraReducers: {
    [clearStore.type]: () => ({
      id: 0,
      userId: 0,
      title: '',
    }),
  },
});

const albumPhotos = createSlice({
  name: 'albumPhotos',
  initialState: [] as Photo[],
  reducers: {
    setPhotos: (initialState, { payload }: PayloadAction<Photo[]>) => [
      ...initialState,
      ...payload,
    ],
  },
  extraReducers: {
    [clearStore.type]: () => [],
  },
});

const photo = createSlice({
  name: 'photo',
  initialState: {
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: '',
  },
  reducers: {
    setPhoto: (initialState, { payload }: PayloadAction<Photo>) => ({
      ...initialState,
      ...payload,
    }),
  },
  extraReducers: {
    [clearStore.type]: () => ({
      albumId: 0,
      id: 0,
      title: '',
      url: '',
      thumbnailUrl: '',
    }),
  },
});

export const { setAuthData } = authData.actions;
export const { setUsers } = users.actions;
export const { setAlbums } = albums.actions;
export const { setUserAlbums } = userAlbums.actions;
export const { setUser } = user.actions;
export const { setAlbum } = album.actions;
export const { setPhotos } = albumPhotos.actions;
export const { setPhoto } = photo.actions;

export default combineReducers({
  authData: authData.reducer,
  users: users.reducer,
  albums: albums.reducer,
  userAlbums: userAlbums.reducer,
  user: user.reducer,
  album: album.reducer,
  albumPhotos: albumPhotos.reducer,
  photo: photo.reducer,
});
