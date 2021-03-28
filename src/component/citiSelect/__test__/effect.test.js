import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import lolex from '@sinonjs/fake-timers';
import { all } from 'redux-saga/effects';
import { ACTIONS } from 'redux-api-call';
import { find, filter, size } from 'lodash/fp';
import effect from '../effect';
import { onSearchAC } from '../state';

const rootSaga = function* rootSage() {
  yield all([effect()]);
};

describe('citi select effect', () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const mockStore = configureStore(middlewares);
  let store;
  store = mockStore({});
  sagaMiddleware.run(rootSaga);
  describe('debounce search 500 ms', () => {
    const clock = lolex.install();
    store.dispatch(onSearchAC('a'));
    store.dispatch(onSearchAC('abc'));
    clock.tick(501);
    it('calls api action 1 time after 500ms', () => {
      const apiAcion = filter(
        (item) => item.type === ACTIONS.START && item.payload.name === 'queryCity',
        store.getActions()
      );
      expect(size(apiAcion)).toEqual(1);
    });
    it('calls api with last search input', () => {
      const apiAcion = find(
        (item) => item.type === ACTIONS.START && item.payload.name === 'queryCity',
        store.getActions()
      );
      expect(apiAcion.payload.endpoint).toMatch(/abc$/);
    });
  });
});
