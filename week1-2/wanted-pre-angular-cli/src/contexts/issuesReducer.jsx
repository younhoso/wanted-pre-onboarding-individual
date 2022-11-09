const ACTION_TYPES = {
  listGet: 'listGet',
  detailGet: 'detailGet',
};

const issuesReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.listGet:
      return {
        ...state,
        listGet: action.initIssues,
      };
    case ACTION_TYPES.detailGet:
      return {
        ...state,
        detailGet: action.initIssues,
      };
    default:
      return state;
  }
};
export default issuesReducer;
