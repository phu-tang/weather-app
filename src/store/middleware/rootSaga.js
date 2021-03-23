import { all } from 'redux-saga/effects';
import citiSelectEffect from '../../component/citiSelect/effect';

export default function* rootSage() {
  yield all([citiSelectEffect()]);
}
