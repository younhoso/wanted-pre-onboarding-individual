import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IssuesAPI from '../api/IssuesApi';
import { issuesDispatchContext, issuesStateContext } from '../contexts/ConfigStore';

function Detail() {
  const { id } = useParams();
  const datas = useContext(issuesStateContext);
  const dispatch = useContext(issuesDispatchContext);

  const handleLoade = async () => {
    const { result } = await IssuesAPI.getIssuesDetail(id);
    dispatch({ type: 'detailGet', initIssues: result.data });
  };

  useEffect(() => {
    handleLoade();
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
