import currentCity, { cityListSelector, onChangeCity, onSearchAC, SEARCH_ACTION } from '../state';

describe('currentCity reducer', () => {
  it('updates when receive updatecity', () => {
    const currentState = null;
    const nextState = currentCity(currentState, { type: 'currentCity/changeCity', payload: 'abc' });
    expect(nextState).toEqual('abc');
  });
});

describe('Action creator', () => {
  describe('search city', () => {
    it('returns obj with payload', () => {
      const result = onSearchAC('London');
      expect(result).toEqual({
        type: SEARCH_ACTION,
        payload: 'London',
      });
    });
  });
  describe('onChangeCity', () => {
    it('returns obj with payload', () => {
      const result = onChangeCity(111);
      expect(result).toEqual({
        type: 'currentCity/changeCity',
        payload: 111,
      });
    });
  });
});

describe('cityListSelector', () => {
  it('returns data with List with lable and value', () => {
    const state = {
      api_calls: {
        queryCity: {
          data: [
            {
              title: 'London',
              location_type: 'City',
              woeid: 44418,
              latt_long: '51.506321,-0.12714',
            },
            {
              title: 'Los Angeles',
              location_type: 'City',
              woeid: 2442047,
              latt_long: '34.053490,-118.245323',
            },
            {
              title: 'São Paulo',
              location_type: 'City',
              woeid: 455827,
              latt_long: '-23.562880,-46.654659',
            },
          ],
        },
      },
    };
    const result = cityListSelector(state);

    const expected = [
      {
        label: 'London',
        value: 44418,
      },
      {
        label: 'Los Angeles',
        value: 2442047,
      },
      {
        label: 'São Paulo',
        value: 455827,
      },
    ];
    expect(result).toEqual(expected);
  });
});
