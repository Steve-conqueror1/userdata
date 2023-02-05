import { put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { api } from '../api';
import * as actions from './actions';

import * as slicesActions from './slices';

function* getUsers(action: ReturnType<typeof actions.getUsersApi>) {
  if (!process.env.REACT_APP_API_SERVER) {
    return;
  }

  try {
    const { data }: AxiosResponse = yield api.get(
      `${process.env.REACT_APP_API_SERVER}/users`
    );
    yield put(slicesActions.setUsers(data));
  } catch (err) {
    console.log('something went wrong'); //Fixme: handle error
  }
}

function* getAlbums(action: ReturnType<typeof actions.getAlbumsApi>) {
  if (!process.env.REACT_APP_API_SERVER) {
    return;
  }

  try {
    const { data }: AxiosResponse = yield api.get(
      `${process.env.REACT_APP_API_SERVER}/albums`
    );
    yield put(slicesActions.setAlbums(data));
  } catch (err) {
    console.log('something went wrong'); //Fixme: handle error
  }
}

function* getUserAlbums(action: ReturnType<typeof actions.getUserAlbumsApi>) {
  if (!process.env.REACT_APP_API_SERVER) {
    return;
  }

  const { userId } = action.payload;

  try {
    const { data }: AxiosResponse = yield api.get(
      `${process.env.REACT_APP_API_SERVER}/users/${userId}/albums`
    );
    yield put(slicesActions.setUserAlbums(data));
  } catch (err) {
    console.log('something went wrong'); //Fixme: handle error
  }
}

function* getUser(action: ReturnType<typeof actions.getUserApi>) {
  if (!process.env.REACT_APP_API_SERVER) {
    return;
  }
  const { userId } = action.payload;

  try {
    const { data }: AxiosResponse = yield api.get(
      `${process.env.REACT_APP_API_SERVER}/users/${userId}`
    );
    yield put(slicesActions.setUser(data));
  } catch (err) {
    console.log('something went wrong'); //Fixme: handle error
  }
}

function* getAlbum(action: ReturnType<typeof actions.getAlbumApi>) {
  if (!process.env.REACT_APP_API_SERVER) {
    return;
  }
  const { albumId } = action.payload;

  try {
    const { data }: AxiosResponse = yield api.get(
      `${process.env.REACT_APP_API_SERVER}/albums/${albumId}`
    );
    yield put(slicesActions.setAlbum(data));
  } catch (err) {
    console.log('something went wrong'); //Fixme: handle error
  }
}

function* getAlbumPhotos(action: ReturnType<typeof actions.getAlbumPhotosApi>) {
  if (!process.env.REACT_APP_API_SERVER) {
    return;
  }
  const { albumId } = action.payload;

  try {
    const { data }: AxiosResponse = yield api.get(
      `${process.env.REACT_APP_API_SERVER}/albums/${albumId}/photos`
    );
    yield put(slicesActions.setPhotos(data));
  } catch (err) {
    console.log('something went wrong'); //Fixme: handle error
  }
}

export function* watchCommonSaga() {
  yield takeLatest(actions.getUsersApi.type, getUsers);
  yield takeLatest(actions.getAlbumsApi.type, getAlbums);
  yield takeLatest(actions.getUserApi.type, getUser);
  yield takeLatest(actions.getUserAlbumsApi.type, getUserAlbums);
  yield takeLatest(actions.getAlbumApi.type, getAlbum);
  yield takeLatest(actions.getAlbumPhotosApi.type, getAlbumPhotos);
}
