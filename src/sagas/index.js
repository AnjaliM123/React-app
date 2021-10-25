import actionWatcher from "./Users";
import {  all } from 'redux-saga/effects';
const allSagas=function* rootSaga() {
    yield all([
    actionWatcher(),
    ]);
 }
 export default allSagas