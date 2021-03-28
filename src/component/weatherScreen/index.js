import { Col, Row } from 'antd';
import React from 'react';
import CitiSelect from '../citiSelect';
import WeatherInfo from '../weatherInfo';

export default () => (
  <Col style={{ padding: 8 }}>
    <Row style={{ padding: 8 }}>
      <CitiSelect />
    </Row>
    <Row style={{ padding: 8 }}>
      <WeatherInfo />
    </Row>
  </Col>
);
