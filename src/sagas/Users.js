import axios from 'axios';
import { put, takeLatest, all,call } from 'redux-saga/effects';
import {USERS_CONST} from "../actionsTypes"
function* userReceiveAll(action) {
  try {
    const { data } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
    yield put({ type: "RECEIVE_API_DATA", payload: { users: data } })
  } catch (e) {
    console.log(e.message)
  }
}
export default function* actionWatcher() {
     yield takeLatest(USERS_CONST.GET_USERS_REQUEST, userReceiveAll)
}