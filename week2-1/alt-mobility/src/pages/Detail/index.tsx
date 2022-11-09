/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-self-compare */
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import useDataAxios from '../../hooks/useDataAxios';
import useDatas from '../../hooks/useDatas';
import { Datas } from '../../types';
import carAPI from '../../utils/api';
import DetailItem from './DetailItem';

function Detail(): React.ReactElement {
  const datas = useDatas();
  // const getCars = useDataAxios(carAPI.getCars);
  const { id } = useParams();
  const { state } = useLocation();
  const availableDays = new Date(state?.startDate);
  const dateString = availableDays.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });
  useEffect(() => {
    if (!state) {
      // getCars(
      //   [],
      //   {},
      //   {
      //     onSuccess: (data: Datas[]) => {
      //       datas.set(data);
      //     },
      //     onError: (state: Datas[]) => {
      //       console.log(state);
      //     },
      //   }
      // );
    }
  }, []);

  return (
    <>
      <Header title="차량상세" />
      <Content>
        {state
          ? String(state.id) === id && <DetailItem state={state} dateString={dateString} />
          : datas?.list.map((item) => (
              <>{String(item.id) === id && <DetailItem state={item} dateString={dateString} />}</>
            ))}
      </Content>
    </>
  );
}

const Content = styled.div`
  padding-top: 60px;
`;

export default Detail;
