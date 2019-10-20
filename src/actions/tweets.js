import action from './action'

export const GET_USER_TWEETS = 'GET_USER_TWEETS'
export const GET_USER_TWEETS_SUCCEEDED = 'GET_USER_TWEETS_SUCCEEDED'
export const GET_USER_TWEETS_FAILED = 'GET_USER_TWEETS_FAILED'

export function getUserTweets(screenName) {
  return action(GET_USER_TWEETS, { screenName })
}