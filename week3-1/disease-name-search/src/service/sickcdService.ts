import dayjs from 'dayjs';
import HttpAxios from '../http/httpAxios';
import { Sick } from '../types';

interface SickcdServiceInterface {
  findCache(keyword: string): CacheNode | null;
  getSick(paramse: string): Promise<Sick[]>;
}

interface CacheNode {
  data: Sick[];
  expireAt: Date;
}

class sickcdDataService implements SickcdServiceInterface {
  protected httpClient;

  private cacheStorage;

  constructor(httpClient: HttpAxios) {
    this.httpClient = httpClient;
    this.cacheStorage = new Map<string, CacheNode>();
  }

  findCache(paramse: string): CacheNode | null {
    //  캐시된 데이터가 존재하지 않는다면...
    if (!this.cacheStorage.has(paramse)) {
      return null;
    }

    const cacheNode = this.cacheStorage.get(paramse);
    //  캐시 노드를 이용할 수 없다면...
    if (!cacheNode) {
      return null;
    }

    //   더 이상 유효한 캐시가 아니라면...
    if (cacheNode.expireAt < new Date()) {
      return null;
    }

    return cacheNode;
  }

  async getSick(paramse: string): Promise<Sick[]> {
    const cacheNode = this.findCache(paramse);
    if (cacheNode) {
      return cacheNode.data;
    }

    const { data } = await this.httpClient.instance.get(`/sick?sickNm_like=${paramse}`);

    const expireAt = dayjs(new Date()).add(5, 'minute').toDate();

    this.cacheStorage.set(paramse, {
      data,
      expireAt,
    });
    console.info('calling api');
    return [...data];
  }
}

export default sickcdDataService;
