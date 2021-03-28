import React from 'react';
import { useSelector } from 'react-redux';
import { queryWeatherByCity } from '../../api';
import { Col, Row, Spin, Card } from 'antd';
import { weatherInfoSelector } from './state';

import { map, isEmpty } from 'lodash/fp';

const { Meta } = Card;

export default () => {
  const isLoading = useSelector(queryWeatherByCity.isFetchingSelector);
  const weatherData = useSelector(weatherInfoSelector);
  if (isLoading) {
    return <Spin />;
  }
  if (isEmpty(weatherData)) return <div>No weather Data</div>;
  return (
    <Row gutter={[16, 16]}>
      {map(
        (item) => (
          <Col key={item.id} span={4}>
            <Card hoverable cover={<img alt={item.weatherType} src={item.icon} />}>
              <Meta
                title={item.dayOfweek}
                description={
                  <>
                    <p>Min: {item.min}</p>
                    <p>Max: {item.max}</p>
                  </>
                }
              />
            </Card>
          </Col>
        ),
        weatherData
      )}
    </Row>
  );
};
