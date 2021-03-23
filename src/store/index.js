import { configureStore } from '@reduxjs/toolkit';
import middleware, { afterCreateMiddleware } from './middleware';

import reducer from './reducer';

const store = configureStore({
  reducer,
  middleware,
});
afterCreateMiddleware();
export default store;
