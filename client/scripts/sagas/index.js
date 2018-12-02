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
import axios from 'axios';
// import { getCart } from '../routes/app.jsx'

import { put, takeLatest, all,call,select } from 'redux-saga/effects';
// const getItems = state => {state.email,state.login};
// console.log(getItems);
// function* checkout() {
//   // query the state using the exported selector
//   const cart = yield select(getCart)

//   // ... call some API endpoint then dispatch a success/error action
// }
export const getProject = (state) => state.email

function* fetchNews() {
  let user =yield select(getProject);
//   let user =JSON.stringify( 
//     {
// //     // username: this.state.username,
// //     // firstName: this.state.firstName,
// //     // lastName: this.state.lastname,
//     email: "acea@ace.com",
// //     // password: this.state.password,
// //     // phone: this.state.phone,
//     // login:"true"
// // getItems
//   }
//   );
  // console.log(user);
  // const user =  yield select(getCart)
  // console.log(...state);
  const json = yield axios.post(`http://localhost:3001/home`, user,
              {headers:{'Content-Type':'application/json'}})

  // const json = yield fetch('http://localhost:3001/home', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type':'application/json'
  //   },
  //   body: {'email':'acea@ace.com',"login":"true"}
  // })
  // console.log(response)
    .then(response => response.data[0]);

  yield put({ type: "NEWS_RECEIVED", json: json, });
  // yield put({ type: "NEWS_RECEIVED", json: json.articles, });

}

// function* fetchNews() {
//   // try {
//     console.log('fetching detail info')
//     const response = yield fetch('http://localhost:3001/home', {
//     method: 'POST',
//     headers: {
//       'Content-Type':'application/json'
//     },
//     body: {'email':'acea@ace.com',"login":"true"}
//   })

//     console.log(response);

//     yield put({type: 'NEWS_RECEIVED', json: response})
//   // } catch (e) {
//   //   console.log('error')
//   // }
// }
function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
