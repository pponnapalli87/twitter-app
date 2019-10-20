import { call, put, take } from 'redux-saga/effects'
import listeningForUsers from './listening-for-users'
import fetchApi from '../services/call-api'

describe('Listening For Products saga', () => {
  it('does fetch products on success', () => {
    const generator = listeningForUsers()
    const payload = {
      searchBy: 'Prasanth Ponnapalli'
    }
    let next

    next = generator.next()

    expect(next.value).toEqual(take('GET_USERS', { payload }))

    next = generator.next()

    expect(next.value).toEqual(call(fetchApi, '/search?searchBy=Prasanth Ponnapalli'))

    const users = [
      {
        id: 123456,
        name: "aaaaa",
        screenName: "AAAAA",
        profileImageUrl: "https://www.testurl.com"
      }
    ]
    next = generator.next(users)

    expect(next.value).toEqual(put({ type: 'GET_USERS_SUCCEEDED', payload: { users } }))
  })

  it('does return error on failure', () => {
    const generator = listeningForUsers()
    const payload = {
      searchBy: 'Prasanth Ponnapalli'
    }
    let next

    next = generator.next()

    expect(next.value).toEqual(take('GET_USERS', { payload }))

    next = generator.next()

    expect(next.value).toEqual(call(fetchApi, '/search'))

    expect(generator.throw('error').value).toEqual(put({ type: 'GET_PRODUCTS_FAILED', payload: { error: 'error' } }))
  })
})