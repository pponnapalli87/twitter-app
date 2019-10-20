import { call, put, take } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';

import {
  GET_USER_TWEETS,
  GET_USER_TWEETS_SUCCEEDED,
  GET_USER_TWEETS_FAILED
} from '../actions/tweets';
import fetchApi from '../services/call-api'

export default function* listeningForTweets() {
  while (true) {
    try {
      const { payload: { screenName } } = yield take(GET_USER_TWEETS);
      if (screenName) {
        const result = yield call(
          fetchApi,
          `/tweets?screenName=${screenName}`
        );

        yield put({
          type: GET_USER_TWEETS_SUCCEEDED,
          payload: { tweets: camelizeKeys(result.tweets) }
        });
      }
    } catch (error) {
      yield put({ type: GET_USER_TWEETS_FAILED, payload: { error } });
    }
  }
}
