/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance } from 'axios';

abstract class HttpClientInterface {
  public instance: AxiosInstance;

  constructor(baseURL: string | undefined, options?: { [key: string]: unknown }) {
    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...options,
      },
    });
  }
}

class HttpAxios extends HttpClientInterface {
  public instance: AxiosInstance;

  constructor(baseURL: string | undefined, options = {}) {
    super(baseURL, options);
    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...options,
      },
    });
  }

  protected handleError = (error: unknown) => Promise.reject(error);
}

export default HttpAxios;
