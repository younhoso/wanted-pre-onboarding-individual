import HttpAxios from '../http/httpAxios';
import { Sick } from '../types';

interface sickcdServiceInterface {
  getSick(paramse?: string): Promise<Sick[]>;
}

class sickcdDataService implements sickcdServiceInterface {
  protected httpClient;

  constructor(httpClient: HttpAxios) {
    this.httpClient = httpClient;
  }

  async getSick(paramse?: string): Promise<Sick[]> {
    const { data } = await this.httpClient.instance.get(`/sick?q=${paramse}`);
    return [...data];
  }
}

export default sickcdDataService;
