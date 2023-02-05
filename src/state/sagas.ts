import { put, takeLatest, select } from 'redux-saga/effects';
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

export function* watchCommonSaga() {
  yield takeLatest(actions.getUsersApi.type, getUsers);
}
