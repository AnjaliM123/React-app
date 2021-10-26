import actionWatcher from "./Users";
import postWatcher from "./AddUsers";
import {  all } from 'redux-saga/effects';
import { postUsers } from "../actions";
const allSagas=function* rootSaga() {
    yield all([
    actionWatcher(),
    postUsers(),
    ]);
 }
 export default allSagas