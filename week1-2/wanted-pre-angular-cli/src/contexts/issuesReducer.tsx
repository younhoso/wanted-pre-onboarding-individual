import { Issue } from "src/types";

export enum IssueActionTypes {
  GET_ISSUE_LIST_SUCCESS = "GET_ISSUES_LIST_SUCCESS",
  GET_ISSUE_LIST_LOADING = "GET_ISSUES_LIST_LOADING",
  GET_ISSUE_LIST_ERROR = "GET_ISSUES_LIST_ERROR",

  GET_ISSUE_DETAIL_SUCCESS = "GET_ISSUES_DETAIL_SUCCESS",
  GET_ISSUE_DETAIL_LOADING = "GET_ISSUES_DETAIL_LOADING",
  GET_ISSUE_DETAIL_ERROR = "GET_ISSUES_DETAIL_ERROR",
};

export interface IssueInitialState {
  isLoading: boolean;
  data: Issue[];
  error: boolean;
}

const issuesReducer = (
  state: IssueInitialState, 
  action: { type: IssueActionTypes; data?: Issue[] }
  ) => {
  switch (action.type) {
    case IssueActionTypes.GET_ISSUE_LIST_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case IssueActionTypes.GET_ISSUE_LIST_SUCCESS:
      return {
        data: [...state.data, ...action.data as Issue[]],
        isLoading: false,
        error: false,
      };
    case IssueActionTypes.GET_ISSUE_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      throw new Error('유효하지 않은 타입입니다.');
  }
};
export default issuesReducer;
