import WeatherInfo from '../index';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import data from './data';

describe('citi select effect', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store;
  store = mockStore(data);
  describe('Citi select index', () => {
    it('renders correctly', () => {
      const { asFragment } = render(
        <Provider store={store}>
          <WeatherInfo />
        </Provider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
