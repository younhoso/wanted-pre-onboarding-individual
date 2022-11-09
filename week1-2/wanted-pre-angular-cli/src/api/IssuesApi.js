import authApi from './Axios';

const IssuesAPI = {
  async getIssues() {
    const result = await authApi.get('/issues?state=open&sort=comments');
    return {
      result,
      errorMsg: {
        default: '목록을 불러오는데 실패하였습니다!',
      },
    };
  },
  async getIssuesDetail(id) {
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
