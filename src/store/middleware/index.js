import createSagaMiddleware from 'redux-saga';
import apiMiddleware from './apiMiddleware';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [apiMiddleware, sagaMiddleware];

export const afterCreateMiddleware = () => {
  sagaMiddleware.run(rootSaga);
};

export default middlewares;
