import axios from 'axios';
import { Datas } from '../types';

type Values = {
  data:{ payload: Datas[] };
  status: number;
}

const DEFAULT_CONFIG = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const axiosInstance = axios.create(DEFAULT_CONFIG);

axiosInstance.interceptors.request.use(
  (config) => config,
  () => ({ message: '런타임 에러가 발생했습니다.' })
);

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => error.response
);

const carAPI = {
  getCars: () => axiosInstance.get('/cars'),
  getCar: (segment?: string) => axiosInstance.get(`/cars?segment=${segment}`)
};

export default carAPI;
