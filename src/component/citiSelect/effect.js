import { isEmpty } from 'lodash/fp';
import { debounce, put } from 'redux-saga/effects';
import { queryCity } from '../../api';
import { SEARCH_ACTION } from './state';

function* fetchQueryCity({ payload }) {
  if (!isEmpty(payload)) {
    yield put(queryCity.actionCreator(payload));
  }
}

export default function* () {
  yield debounce(500, SEARCH_ACTION, fetchQueryCity);
}
