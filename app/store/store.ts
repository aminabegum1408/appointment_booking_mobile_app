import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from '../redux/rootSaga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware
        // createLogger(),
    ),
);
sagaMiddleware.run(rootSaga);
export {
    store,
}