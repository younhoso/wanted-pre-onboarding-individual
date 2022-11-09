import { useContext } from 'react';
import { DataContext } from '../contexts/dataContext';

function useDatas() {
  const datas = useContext(DataContext);
  if (datas === null) {
    throw new Error('DataContext is null');
  }
  return datas;
}

export default useDatas;