import {
  GET_USER_TWEETS,
  GET_USER_TWEETS_SUCCEEDED,
  GET_USER_TWEETS_FAILED
} from '../actions/tweets';

const INITIAL_STATE = {
  loading: false,
  tweets: [],
  error: false
};

export default function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_TWEETS: {
      return { ...state, error: false, loading: true, tweets: [] };
    }
    case GET_USER_TWEETS_SUCCEEDED: {
      const { tweets } = action.payload;

      return { ...state, error: false, loading: false, tweets: [...tweets] };
    }
    case GET_USER_TWEETS_FAILED: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
}
