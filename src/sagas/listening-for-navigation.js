import { take } from 'redux-saga/effects';

import {
  NAVIGATE_TO_HOME,
} from '../actions/users';

export default function* listeningForNavigation() {
  while(true) {
    const { payload: { history } } = yield take(NAVIGATE_TO_HOME)
    history.goBack();
  }
}
