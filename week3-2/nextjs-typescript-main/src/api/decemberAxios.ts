import axios, { RawAxiosRequestHeaders } from "axios";

type loginData = {
	[key: string]: string,
}

const SERVER = {
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  validityState: (status: number) => {
    return status >= 200 && status < 300;
  },
};

export const api = axios.create(SERVER);

// 토큰 실어보내는 request interceptor
api.interceptors.request.use((config) => {
	const headers = config.headers as RawAxiosRequestHeaders;
	if(localStorage.getItem('accessToken')){
		headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
	}else{
		if(window.location.pathname !== '/login') window.location.href= "/login";
	}
	return config;
}, (err) => {
	return Promise.reject(err);
});

api.interceptors.response.use(
	(config) => config,
  (error) => error.response
);

export const apis = {
	login: (data: loginData) => api.post('/users/signup', data)
}