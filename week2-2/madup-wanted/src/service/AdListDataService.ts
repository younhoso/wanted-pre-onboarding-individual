import HttpAxios from '../http/httpAxios';
import { Adv } from '../types';

interface AdsServiceInterface {
  get(): Promise<Adv[]>;
}

class AdListDataService implements AdsServiceInterface {
  protected httpClient;

  constructor(httpClient: HttpAxios) {
    this.httpClient = httpClient;
  }

  async get(): Promise<Adv[]> {
    const { data } = await this.httpClient.instance.get('/ads');
    return [...data];
  }
}

export default AdListDataService;
