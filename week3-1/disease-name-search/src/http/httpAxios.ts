/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance } from 'axios';

interface HttpClientInterface {
  handleError(error: unknown): Promise<string>;
}

class HttpAxios implements HttpClientInterface {
  public instance: AxiosInstance;

  constructor(baseURL: string | undefined, options = {}) {
    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...options,
      },
    });
  }

  handleError(error: unknown): Promise<string> {
    return Promise.reject(error);
  }
}

export default HttpAxios;
