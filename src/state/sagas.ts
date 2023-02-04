import { put, takeLatest, select } from 'redux-saga/effects';

import { api } from '../api';
import * as actions from './actions';
import { loginUser } from './actions';

export function* watchCommonSaga() {
  // yield takeLatest(actions.loginUser.type, loginUser);
}
