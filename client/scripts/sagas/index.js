// import { put, takeLatest, all } from 'redux-saga/effects';

// function* fetchAPI() {

//   const json = yield fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json(), );

//   yield put({ type: "API_RECEIVED", json: json.articles, });
// }

// function* actionWatcher() {
//   yield takeLatest('GET_API', fetchAPI)
// } 


// export default function* rootSaga() {
//   yield all([
//     actionWatcher(),
//   ]);
// }
// import { put, takeLatest, all } from 'redux-saga/effects';

// function* fetchNews() {

//   const json = yield fetch('https://randomuser.me/api')
//     .then(response => response.json(), );

//   yield put({ type: "NEWS_RECEIVED", json: json.articles, });
// }

// function* actionWatcher() {
//   yield takeLatest('GET_NEWS', fetchNews)
// }


// export default function* rootSaga() {
//   yield all([
//     actionWatcher(),
//   ]);
// }

import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

<<<<<<< HEAD
  const json = yield fetch('http://localhost:4000')
=======
  const json = yield fetch('http://localhost:3001/allusers')
>>>>>>> f37ff8dea3472dd9a916bb3b69c2028d0f73c23b
    .then(response => response.json(), );

  yield put({ type: "NEWS_RECEIVED", json: json, });
  // yield put({ type: "NEWS_RECEIVED", json: json.articles, });

}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
