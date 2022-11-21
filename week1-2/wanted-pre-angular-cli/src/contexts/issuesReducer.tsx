import { AxiosError } from 'axios';
import { Action, Issue } from "src/types";

export interface State {
  isLoading: boolean;
  data: Issue[];
  error: AxiosError | null;
}

const GET_ISSUES_TYPE = 'GET_ISSUES';
const GET_ISSUES_SUCCESS_TYPE = 'GET_ISSUES_SUCCESS';
const GET_ISSUES_ERROR_TYPE = 'GET_ISSUES_ERROR';

const issuesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case GET_ISSUES_TYPE:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_ISSUES_SUCCESS_TYPE:
      return {
        isLoading: false,
        data: [...state.data, ...action.data],
        error: null,
      };
    case GET_ISSUES_ERROR_TYPE:
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error('유효하지 않은 타입입니다.');
  }
};
export default issuesReducer;
