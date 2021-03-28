import data from './data';
import { weatherInfoSelector } from '../state';

describe('weatherInfoSelector', () => {
  it('returns array data with format obj is id,dayOfweek,dispayDate, min, max, temp, icon, weatherType', () => {
    const state = data;
    const result = weatherInfoSelector(state);
    const expected = [
      {
        id: 5055458147565568,
        dayOfweek: 'Sunday',
        dispayDate: '03-28-2021',
        min: '8.29',
        max: '13.15',
        temp: '11.91',
        icon: 'https://www.metaweather.com/static/img/weather/hc.svg',
        weatherType: 'Heavy Cloud',
      },
      {
        id: 5754551886938112,
        dayOfweek: 'Monday',
        dispayDate: '03-29-2021',
        min: '8.33',
        max: '18.51',
        temp: '16.94',
        icon: 'https://www.metaweather.com/static/img/weather/c.svg',
        weatherType: 'Clear',
      },
      {
        id: 4717326680195072,
        dayOfweek: 'Tuesday',
        dispayDate: '03-30-2021',
        min: '7.47',
        max: '21.26',
        temp: '20.05',
        icon: 'https://www.metaweather.com/static/img/weather/lc.svg',
        weatherType: 'Light Cloud',
      },
      {
        id: 5051492550574080,
        dayOfweek: 'Wednesday',
        dispayDate: '03-31-2021',
        min: '9.13',
        max: '19.71',
        temp: '20.44',
        icon: 'https://www.metaweather.com/static/img/weather/hc.svg',
        weatherType: 'Heavy Cloud',
      },
      {
        id: 6458867434127360,
        dayOfweek: 'Thursday',
        dispayDate: '04-01-2021',
        min: '6.22',
        max: '13.39',
        temp: '13.34',
        icon: 'https://www.metaweather.com/static/img/weather/s.svg',
        weatherType: 'Showers',
      },
      {
        id: 5639633191829504,
        dayOfweek: 'Friday',
        dispayDate: '04-02-2021',
        min: '4.04',
        max: '12.43',
        temp: '8.93',
        icon: 'https://www.metaweather.com/static/img/weather/hc.svg',
        weatherType: 'Heavy Cloud',
      },
    ];

    expect(result).toEqual(expected);
  });
});
