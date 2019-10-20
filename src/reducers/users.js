import {
  GET_USERS,
  GET_USERS_SUCCEEDED,
  GET_USERS_FAILED,
  NAVIGATE_TO_HOME,
} from '../actions/users';

const INITIAL_STATE = {
  loading: false,
  users: [],
  error: false
};

export default function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS: {
      return { ...state, error: false, loading: true };
    }
    case GET_USERS_SUCCEEDED: {
      const { users } = action.payload;

      return { ...state, error: false, loading: false, users: [...users] };
    }
    case GET_USERS_FAILED: {
      return { ...state, loading: false, error: true };
    }
    case NAVIGATE_TO_HOME: {
      return { ...state, loading: false, users: []}
    }
    default: {
      return state;
    }
  }
}
