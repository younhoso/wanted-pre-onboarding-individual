import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IssueActionTypes } from "../contexts/issuesReducer";
import IssuesAPI from '../api/IssuesApi';
import parseIssue from '../utils/parseIssue';
import { useIssuesDispatch, useIssuesState } from '../hooks/useIssues';

function IssueLoader() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const page = useRef(0);
  const [isEnd, setIsEnd] = useState(false);
  const { isLoading } = useIssuesState();
  const dispatch = useIssuesDispatch();
  const navigate = useNavigate();

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        dispatch({ type: IssueActionTypes.GET_ISSUE_LIST_LOADING });
        try {
          const response = await IssuesAPI.getIssues(
            'comments',
            ++page.current
          );
          dispatch({
            type: IssueActionTypes.GET_ISSUE_LIST_SUCCESS,
            data: response.result.data.map(parseIssue),
          });
          if (response.result.data.length < 10) {
            setIsEnd(true);
          } else {
            observer.observe(entry.target);
          }
        } catch (error) {
          dispatch({ type: IssueActionTypes.GET_ISSUE_LIST_ERROR });
          navigate('/error');
        }
      }
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    if (divRef.current !== null) {
      observerRef.current = new IntersectionObserver(onIntersect);
      observerRef.current.observe(divRef.current);
      return () => observerRef.current?.disconnect();
    }
  }, [onIntersect]);

  if (isEnd) {
    return null;
  } 
  return (
    <div ref={divRef}>
      {isLoading && <div>데이터를 불러오는 중입니다.</div>}
    </div>
  );  
}

export default IssueLoader;
