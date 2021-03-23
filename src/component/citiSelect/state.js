import { createSlice } from '@reduxjs/toolkit';
import { flow, map } from 'lodash/fp';
import { createSelector } from 'reselect';
import { queryCity } from '../../api';

export const SEARCH_ACTION = 'CITI_SELECT/SEARCH_ACTION';

export const onSearchAC = (text) => ({
  type: SEARCH_ACTION,
  payload: text,
});

export const cityListSelector = createSelector(
  queryCity.dataSelector,
  flow(map((item) => ({ label: item.title, value: item.woeid })))
);

const citySlice = createSlice({
  name: 'currentCity',
  initialState: null,
  reducers: {
    changeCity: (_, { payload }) => payload,
  },
});
export const onChangeCity = citySlice.actions.onChangeCity;

export default citySlice.reducer;
