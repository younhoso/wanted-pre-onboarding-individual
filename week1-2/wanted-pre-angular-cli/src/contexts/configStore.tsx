import React, { createContext, useReducer } from 'react';
import { Action } from 'src/types';
import issuesReducer, { State } from './issuesReducer';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

interface Props {
  children: React.ReactElement
}

const IssuesStateContext = createContext<State>(initialState);
const IssuesDispatchContext = createContext<React.Dispatch<Action>>(
  () => {}
);

function IssuesContextProvider({ children }: Props) {

  const [issues, dispatch] = useReducer(issuesReducer, initialState);

  return (
    <IssuesStateContext.Provider value={issues}>
      <IssuesDispatchContext.Provider value={dispatch}>
        {children}
      </IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

export { IssuesStateContext, IssuesDispatchContext };
export default IssuesContextProvider;
