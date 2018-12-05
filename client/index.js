import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/routes/App.jsx';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducer from './scripts/reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore)
// // function tick() {
// ReactDOM.render(
//         <Provider store={createStoreWithMiddleware(reducers)}>

//             <App />
//         </Provider>



// , document.getElementById('root'));
// }
// setInterval(tick, 1000);
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './scripts/sagas/index.js';
// import { render } from 'react-dom';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);
console.log(store.getState());
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

