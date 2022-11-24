import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IssueActionTypes } from 'src/contexts/issuesReducer';
import IssuesAPI from '../api/IssuesApi';
import {  IssuesDispatchContext, IssuesStateContext } from '../contexts/configStore';

function Detail() {
  const { id } = useParams();
  const datas = useContext(IssuesStateContext);
  const dispatch = useContext(IssuesDispatchContext);

  const handleLoade = async () => {
    const { result } = await IssuesAPI.getIssuesDetail(Number(id));
    dispatch({
      type: IssueActionTypes.GET_ISSUE_DETAIL_SUCCESS,
      data: result.data
    });
  };

  useEffect(() => {
    handleLoade();
  }, []);

  return (
    <div>
      Detail{id}
      <div>{datas.issueDetail?.number}</div>
      <div>{datas.issueDetail?.title}</div>
      <div>{datas.issueDetail?.created_at}</div>
      <div>{datas.issueDetail?.comments}</div>
    </div>
  );
}
export default Detail;
