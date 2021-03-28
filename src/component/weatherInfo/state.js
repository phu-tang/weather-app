import { path, flow, map } from 'lodash/fp';
import { createSelector } from 'reselect';
import { format, parse } from 'date-fns';
import { queryWeatherByCity } from '../../api';

export const weatherInfoSelector = createSelector(
  queryWeatherByCity.dataSelector,
  flow(
    path('consolidated_weather'),
    map((item) => {
      const parsingDate = parse(item.applicable_date, 'yyyy-MM-dd', new Date());
      return {
        id: item.id,
        dayOfweek: format(parsingDate, 'EEEE'),
        dispayDate: format(parsingDate, 'MM-dd-yyyy'),
        min: item.min_temp.toFixed(2),
        max: item.max_temp.toFixed(2),
        temp: item.the_temp.toFixed(2),
        icon: `https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`,
        weatherType: item.weather_state_name,
      };
    })
  )
);
