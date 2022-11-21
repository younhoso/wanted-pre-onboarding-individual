import axios, { RawAxiosRequestHeaders } from 'axios';

const DEFAULT_CONFIG = {
  baseURL: process.env.REACT_APP_SERVER,
  headers: { 'Content-Type': 'application/json' },
};

const authApi = axios.create(DEFAULT_CONFIG);

authApi.interceptors.request.use(
  config => {
    const headers = config.headers as RawAxiosRequestHeaders;
    headers['Authorization'] = `token ${process.env.REACT_APP_GIT_TOKEN}`;
    return config;
  },
  () => ({ message: '런타임 에러가 발생했습니다!' })
);
authApi.interceptors.response.use(
  config => config,
  error => error.response
);

export default authApi;
