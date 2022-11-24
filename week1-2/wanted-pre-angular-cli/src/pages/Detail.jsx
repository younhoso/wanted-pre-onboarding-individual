// import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import IssuesAPI from '../api/IssuesApi';
// import {  IssuesDispatchContext, IssuesStateContext } from '../contexts/configStore';

function Detail() {
  // const { id } = useParams();
  // const datas = useContext(IssuesStateContext);
  // const dispatch = useContext(IssuesDispatchContext);

  // const handleLoade = async () => {
  //   const { result } = await IssuesAPI.getIssuesDetail(id);
  //   dispatch({
  //     type: 'GET_ISSUES_SUCCESS',
  //     data: result.data
  //   });
  // };

  useEffect(() => {
    handleLoade();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      Detail{id}
      <div>{datas.detailGet?.number}</div>
      <div>{datas.detailGet?.title}</div>
      <div>{datas.detailGet?.created_at}</div>
      <div>{datas.detailGet?.comments}</div>
    </div>
  );
}
export default Detail;
