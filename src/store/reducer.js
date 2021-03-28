import { reducers as apiReducers } from 'redux-api-call';
import currentCity from '../component/citiSelect/state';

const reducer = {
  ...apiReducers,
  currentCity,
};

export default reducer;
