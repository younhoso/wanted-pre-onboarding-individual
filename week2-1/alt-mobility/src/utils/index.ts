import { CategoryValues } from '../types';

/**
 * 숫자 3가지에 콤수를 추가 할수 있습니다.
 */
export const comma = (str: string) => {
  const strs = String(str);
  return strs.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};

export const vehicleSegmentCategory: CategoryValues[] = [
  { id: 1, segment: '', content: '전체' },
  { id: 2, segment: 'SUV', content: 'SUV' },
  { id: 3, segment: 'E', content: '대형' },
  { id: 4, segment: 'D', content: '중형' },
  { id: 5, segment: 'C', content: '소형' },
];

export const getSegment = (searchParams: URLSearchParams) => {
  switch(searchParams.get('segment')){
    case 'SUV':
      return 'SUV';
    case 'E':
      return 'E';
    case 'D':
      return 'D';
    case 'C':
      return 'C';
    default:
      return '';
  }
};