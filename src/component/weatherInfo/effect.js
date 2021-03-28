import { isNil } from 'lodash/fp';
import { takeEvery, put } from 'redux-saga/effects';
import { queryWeatherByCity } from '../../api';

const isUpdateCurrentCity = ({ type, payload }) => type === 'currentCity/changeCity' && !isNil(payload);
const isClearCurrentCity = ({ type, payload }) => type === 'currentCity/changeCity' && isNil(payload);

function* fetchQueryWeather({ payload }) {
  yield put(queryWeatherByCity.actionCreator(payload));
}

function* resetWeatherInfo() {
  yield put(queryWeatherByCity.resetter());
}

export default function* () {
  yield takeEvery(isUpdateCurrentCity, fetchQueryWeather);
  yield takeEvery(isClearCurrentCity, resetWeatherInfo);
}
