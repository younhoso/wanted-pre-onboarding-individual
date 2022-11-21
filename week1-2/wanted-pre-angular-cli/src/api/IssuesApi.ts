/* eslint-disable camelcase */
import authApi from './Axios';

const IssuesAPI = {
  async getIssues(sort = 'comments', page = 1, per_page = 10) {
    const result = await authApi.get('/issues', {
      params: {
        sort,
        page,
        per_page,
      },
    });
    return {
      result,
      errorMsg: {
        default: '목록을 불러오는데 실패하였습니다!',
      },
    };
  },
  async getIssuesDetail(id: number) {
    const result = await authApi.get(`/issues/${id}`);
    return {
      result,
      errorMsg: {
        default: '상세페이지 불러오는데 실패하였습니다!.',
      },
    };
  },
};

export default IssuesAPI;
