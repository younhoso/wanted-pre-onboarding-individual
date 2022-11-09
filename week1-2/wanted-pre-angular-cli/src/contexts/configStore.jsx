import React, { createContext, useReducer } from 'react';
import issuesReducer from './IssuesReducer';

const issuesStateContext = createContext('');
const issuesDispatchContext = createContext('');

const initIssues = {
  listGet: [],
  detailGet: {},
};

// eslint-disable-next-line react/prop-types
function IssuesContextProvider({ children }) {
  const [issues, dispatch] = useReducer(issuesReducer, initIssues);

  return (
    <issuesStateContext.Provider value={issues}>
      <issuesDispatchContext.Provider value={dispatch}>{children}</issuesDispatchContext.Provider>
    </issuesStateContext.Provider>
  );
}

export { issuesStateContext, issuesDispatchContext };
export default IssuesContextProvider;
