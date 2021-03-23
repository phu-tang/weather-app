import React, { useCallback, useState } from 'react';
import { Select, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { queryCity } from '../../api';
import { cityListSelector, onChangeCity, onSearchAC } from './state';

export default () => {
  const isFetching = useSelector(queryCity.isFetchingSelector);
  const dispatch = useDispatch();
  const [data, updateData] = useState(null);
  const cityList = useSelector(cityListSelector);

  const onSearch = useCallback(
    (value) => {
      dispatch(onSearchAC(value));
    },
    [dispatch]
  );
  const onClear = useCallback(() => {
    dispatch(onChangeCity(null));
    dispatch(queryCity.resetter());
    updateData(null);
  }, [dispatch]);
  const onChange = useCallback(
    (value) => {
      updateData(value);
      dispatch(onChangeCity(value));
    },
    [dispatch]
  );
  return (
    <Select
      style={{ width: 200 }}
      showSearch
      notFoundContent={isFetching ? <Spin size="small" /> : null}
      value={data}
      placeholder={'Search the city'}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={onSearch}
      onChange={onChange}
      options={cityList}
      allowClear
      onClear={onClear}
    ></Select>
  );
};
