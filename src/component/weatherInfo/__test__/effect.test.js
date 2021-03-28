import { find } from 'lodash/fp';
import { ACTIONS } from 'redux-api-call';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import effect from '../effect';

const rootSaga = function* rootSage() {
  yield all([effect()]);
};

describe('citi update select effect', () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const mockStore = configureStore(middlewares);
  let store;
  beforeEach(() => {
    store = mockStore({});
    sagaMiddleware.run(rootSaga);
  });
  it('dispatchs clear data when having clear citi action', () => {
    store.dispatch({
      type: 'currentCity/changeCity',
      payload: null,
    });

    const expectedAction = find(
      ({ type, payload }) => type === ACTIONS.RESET_LOCAL && payload.name === 'queryWeather',
      store.getActions()
    );
    expect(store.getActions().length).toEqual(2);
    expect(expectedAction).toBeDefined();
  });
  it('dispatchs query weather when updateCicty', () => {
    store.dispatch({
      type: 'currentCity/changeCity',
      payload: 123,
    });

    const expectedAction = find(
      ({ type, payload }) => type === ACTIONS.START && payload.name === 'queryWeather',
      store.getActions()
    );
    expect(store.getActions().length).toEqual(2);
    expect(expectedAction).toBeDefined();
    expect(expectedAction.payload.endpoint).toMatch(/123$/);
  });
});
