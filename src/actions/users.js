import action from './action'

export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCEEDED = 'GET_USERS_SUCCEEDED'
export const GET_USERS_FAILED = 'GET_USERS_FAILED'
export const NAVIGATE_TO_HOME = 'NAVIGATE_TO_HOME'
export const CLEAR_USERS = 'CLEAR_USERS'

export function getUsers(searchBy) {
  return action(GET_USERS, { searchBy })
}

export function clearUsers() {
  return action(CLEAR_USERS)
}

export function navigateToHome(history) {
  return action(NAVIGATE_TO_HOME, { history })
}