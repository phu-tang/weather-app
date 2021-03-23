import createSagaMiddleware from 'redux-saga';
import { middleware as apiMiddleware } from 'redux-api-call';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [apiMiddleware, sagaMiddleware];

export const afterCreateMiddleware = () => {
  sagaMiddleware.run(rootSaga);
};

export default middlewares;
