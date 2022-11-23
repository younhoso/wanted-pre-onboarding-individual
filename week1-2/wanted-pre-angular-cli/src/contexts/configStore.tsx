import React, { createContext, useReducer } from 'react';
import { Issue } from 'src/types';
import issuesReducer, { IssueActionTypes, IssueInitialState } from './issuesReducer';


const initialState: IssueInitialState = {
  isLoading: false,
  data: [],
  error: false,
};

interface Props {
  children: React.ReactElement
}

const IssuesStateContext = createContext<IssueInitialState>(initialState);
const IssuesDispatchContext = createContext<React.Dispatch<{
  type: IssueActionTypes;
  data?: Issue[]
}> | null>(null);

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
