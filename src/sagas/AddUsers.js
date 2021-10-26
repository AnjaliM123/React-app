// function* createPostSaga(action) {
//     const token = yield select(selectToken);
//     const headers = {
//         "Content-type": "application/json; charset=UTF-8"
//     };
//     console.log(token, headerParams);
//     try {
//       yield call(axios.post, "https://jsonplaceholder.typicode.com/users", action.payload, {headers:headers});
//       yield call(getPosts());
//     } catch (error) {
//       console.log(error);
//     }
//   }

import { call, put,takeLatest } from "@redux-saga/core/effects";

import axios from "axios";

import {ADD_USERS_CONST} from "../actionsTypes"

// function* createPostSaga(action) {
//     const headers = {
//                "Content-type": "application/json; charset=UTF-8"
//              };


// const apiCall=()=> {
//     return  axios
//     .post("https://jsonplaceholder.typicode.com/posts", action.payload, {headers: headers })
//     .then((response) => response.data)
//     .catch((error) => {
//         throw error
//     })
// }

// try {
//     yield call (apiCall)
//     yield put({ type: POST_USERS_CONST.POST_USERS_SUCCESS})
// }
// catch(error) {
//     console.log(error)
// }
// }

// export default function* postWatcher() {
//     yield takeLatest(POST_USERS_CONST.POST_USERS_REQUEST, createPostSaga)
// }



// function* createUsers(action) {
//     try {
//       const { newUser } = action;
//       const usersDetails = yield axios.post("https://jsonplaceholder.typicode.com/posts", newUser)
//       .then(response => response.data);
//       yield put({ type: POST_USERS_CONST.POST_USERS_SUCCESS, data: usersDetails });
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   export default function* postWatcher() {
//       yield takeLatest(POST_USERS_CONST.POST_USERS_REQUEST, createUsers)
//   }



function* addPost(action) {
  console.log(action)
  try {
      const postResponse = yield call(axios.post("https://jsonplaceholder.typicode.com/posts", action.payload));
      yield put({ type: ADD_USERS_CONST.ADD_USERS_SUCCESS, payload: postResponse });
  } catch (err) {
      console.log(err);
  }
}

export default function* postWatcher() {
  yield takeLatest(ADD_USERS_CONST.ADD_USERS_REQUEST, addPost);
}