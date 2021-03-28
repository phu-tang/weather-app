import { makeFetchAction } from 'redux-api-call';
import { stringify } from 'query-string';

export const queryCity = makeFetchAction('querySelector', (query) => ({
  endpoint: `${process.env.REACT_APP_API_ENPOINT}/api/location/search/?${stringify({
    query,
  })}`,
}));

export const queryWeatherByCity = makeFetchAction('queryWeather', (woeid) => ({
  endpoint: `${process.env.REACT_APP_API_ENPOINT}/api/location/${woeid}`,
}));
