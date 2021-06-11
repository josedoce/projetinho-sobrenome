import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;