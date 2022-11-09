/* eslint-disable no-return-await */
import { atom, useRecoilValue } from 'recoil';
import HttpAxios from '../http/httpAxios';
import TokenRepository from '../repository/tokenRepository';
import AdListDataService from '../service/AdListDataService';

const tokenRepository = new TokenRepository();
const httpClient = new HttpAxios(process.env.REACT_APP_BASE_URL, tokenRepository);
const adService = new AdListDataService(httpClient);

export const adState = atom({
  key: 'adState',
  default: adService.get(),
});

export const useFilteredAdsValue = () => useRecoilValue(adState);
