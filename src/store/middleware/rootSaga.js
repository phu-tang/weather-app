import { all } from 'redux-saga/effects';
import citiSelectEffect from '../../component/citiSelect/effect';
import weatherInfoEffect from '../../component/weatherInfo/effect';

export default function* rootSage() {
  yield all([citiSelectEffect(), weatherInfoEffect()]);
}
