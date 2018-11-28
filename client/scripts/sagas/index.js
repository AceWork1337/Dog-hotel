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


  const json = yield fetch('http://localhost:3001/home')
    .then(response => response.json() );

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
