import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import sickcdDataService from '../service/sickcdService';
import { Sick } from '../types';

type sickcdProviderProps = {
  children: React.ReactNode;
  sickcdService: sickcdDataService;
};

type State = {
  sick: Sick[];
  getSick: (paramse: string) => void;
};

const SickcdContext = createContext<State>({
  sick: [],
  getSick: () => null,
});
export const useSickcd = () => useContext(SickcdContext);

export function SickcdProvider({ children, sickcdService }: sickcdProviderProps) {
  const [sick, setSickcd] = useState<Sick[]>([]);

  const getSick = async (paramse = '') => {
    if(paramse === '') return false;
    const data = await sickcdService.getSick(paramse);
    setSickcd(data);
  };

  useEffect(() => {
    getSick();
  }, []);

  const value = useMemo(() => ({ sick, getSick }), [sick]);

  return <SickcdContext.Provider value={value}>{children}</SickcdContext.Provider>;
}
