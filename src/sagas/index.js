import { fork } from 'redux-saga/effects';

import listeningForUsers from './listening-for-users';
import listeningForTweets from './listening-for-tweets';
import listeningForNavigation from './listening-for-navigation'

export default function* root() {
  yield fork(listeningForUsers);
  yield fork(listeningForTweets);
  yield fork(listeningForNavigation);
}
