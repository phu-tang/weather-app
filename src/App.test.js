import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';

describe('renders learn react link', () => {
  it('render without error', () => {
    const result = render(
      <Provider store={store}>
        <App />)
      </Provider>
    );
    expect(result).toBeDefined();
  });
});
