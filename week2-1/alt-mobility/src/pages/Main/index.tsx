/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useSearchParams } from 'react-router-dom';
import useDataAxios from '../../hooks/useDataAxios';
import carAPI from '../../utils/api';
import Header from '../../components/Header';
import useDatas from '../../hooks/useDatas';
import { Datas, VehicleSegment } from '../../types/index';
import { flexBox } from '../../styles/mixin';
import Button from '../../components/Button';
import LoadingSpinner from '../../components/LoadingSpinner';
import MainItem from './MainItem';
import { getSegment, vehicleSegmentCategory } from '../../utils';
import useGetData from '../../hooks/useDataAxios';

type CategoryProps = {
  setSearchParams: (nextInit?: Record<string, string | string[]>) => void;
  segment: VehicleSegment | '';
};

function Main(): React.ReactElement {
  const datas = useDatas();
  const {values, getValues} = useGetData();

  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const segment = getSegment(searchParams);
  const [activeTag, setActiveTag] = useState(segment);

  const handelClick = (tag: VehicleSegment | '') => () => {
    setActiveTag(tag)
    if (!tag.length) {
      setSearchParams({});
      return;
    }
    getValues()
    setSearchParams({ segment: tag });

    // getCar(
    //   [tag],
    //   {},
    //   {
    //     onSuccess: (data: Datas[]) => {
    //       datas.set(data);
    //       setIsLoading(false);
    //     },
    //     onError: (state: Datas[]) => {
    //       console.log(state);
    //     },
    //   }
    // );
  };

  useEffect(() => {
    setIsLoading(true);
    // getCars(
    //   [],
    //   {},
    //   {
    //     onSuccess: (data: Datas[]) => {
    //       datas.set(data);
    //       setIsLoading(false);
    //     },
    //     onError: (state: Datas[]) => {
    //       console.log(state);
    //     },
    //   }
    // );
  }, []);

  return (
    <>
      <Header title="전체차량" />
      <Content>
        <Menu>
          {vehicleSegmentCategory.map((ele) => (
            <Button 
              key={ele.id} 
              isActive={activeTag === ele.segment} 
              customStyle={TagLargeStyle} 
              onClick={handelClick(ele.segment)}>
              {ele.content}
            </Button>
          ))}
        </Menu>
        {datas?.list.map((item) => (
          <Link
            to={{pathname: `/${item.id}`}}
            state={item}
            key={item.id}>
            <MainItem item={item} />
          </Link>
        ))}
        {isLoading && (
          <LoadingContainer>
            <LoadingSpinner />
          </LoadingContainer>
        )}
      </Content>
    </>
  );
}

const TagLargeStyle = css`
  width: 62px;
  height: 33px;
  color: #000;
  background-color: #D9D9D9;
  font-weight: 400;
  border-radius: 1rem;
`

const Content = styled.div`
  padding-top: 60px;
`;

const Menu = styled.div`
  margin: 0 auto;
  padding: 10px 20px;
  border-bottom: 1px solid #000;
`;

const LoadingContainer = styled.div`
  ${flexBox()};
  width: 100%;
  height: 200px;
`;

export default Main;
