/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IssuesAPI from '../api/IssuesApi';
import { issuesStateContext, issuesDispatchContext } from '../contexts/ConfigStore';

function List() {
  const datas = useContext(issuesStateContext);
  const dispatch = useContext(issuesDispatchContext);

  const handleLoade = async () => {
    const { result } = await IssuesAPI.getIssues();
    dispatch({ type: 'listGet', initIssues: result.data });
  };

  useEffect(() => {
    handleLoade();
  }, []);

  return (
    <ul>
      {datas.listGet?.map((list, idx) =>
        idx === 5 ? (
          <div key={list.id}>
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
          </div>
        ) : (
          <li key={list.id}>
            <div>{list.number}</div>
            <div>{list.title}</div>
            <div>{list.user.login}</div>
            <div>{list.updated_at}</div>
            <div>{list.comments}</div>
            <Link to={`/${list.number}`}>버튼</Link>
          </li>
        )
      )}
    </ul>
  );
}

export default List;
