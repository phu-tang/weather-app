import CitiSelect from '../index';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('citi select effect', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store;
  store = mockStore({});
  describe('Citi select index', () => {
    it('renders correctly', () => {
      const { asFragment } = render(
        <Provider store={store}>
          <CitiSelect />
        </Provider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
