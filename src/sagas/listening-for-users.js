import { call, put, take } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';

import fetchApi from '../services/call-api'
import {
  GET_USERS,
  GET_USERS_SUCCEEDED,
  GET_USERS_FAILED,
} from '../actions/users';

export default function* listeningForUsers() {
  while (true) {
    try {
      const { payload: { searchBy } } = yield take(GET_USERS);
      if (searchBy) {
        const result = yield call(
          fetchApi,
          `/search?searchBy=${searchBy}`
        );

        yield put({
          type: GET_USERS_SUCCEEDED,
          payload: { users: camelizeKeys(result.users) }
        });
      }
    } catch (error) {
      yield put({ type: GET_USERS_FAILED, payload: { error: 'Something went wrong!!' } });
    }
  }
}
