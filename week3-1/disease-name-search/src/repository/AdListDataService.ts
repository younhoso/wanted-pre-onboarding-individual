import HttpAxios from '../http/httpAxios';
import { Sick } from '../types';

interface AdsServiceInterface {
  get(): Promise<Sick[]>;
}

class AdListDataService implements AdsServiceInterface {
  protected httpClient;

  constructor(httpClient: HttpAxios) {
    this.httpClient = httpClient;
  }

  async get(): Promise<Sick[]> {
    const { data } = await this.httpClient.instance.get('/ads');
    return [...data];
  }
}

export default AdListDataService;
