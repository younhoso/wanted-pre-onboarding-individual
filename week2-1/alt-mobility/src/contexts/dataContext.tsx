import { createContext, useCallback, useMemo, useState } from 'react';
import { Datas } from '../types';

type DataContextValue = { list: Datas[]; set: (datas: Datas[]) => void };

const DataContext = createContext<DataContextValue | null>(null);

function DataProvider({ children }: any): JSX.Element {
  const [datas, setDatas] = useState<Datas[]>([]);
  const set = useCallback((datas: Datas[]) => {
    setDatas(datas);
  }, []);

  const value = useMemo(() => ({ list: datas, set }), [datas]) as DataContextValue;

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export { DataProvider, DataContext };
