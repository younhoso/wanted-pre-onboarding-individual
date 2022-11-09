import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import sickcdDataService from '../service/sickcdService';
import { Sick } from '../types';

type sickcdProviderProps = {
  children: React.ReactNode;
  sickcdService: sickcdDataService;
};

type State = {
  sickcd: Sick[];
  getSickCd: (paramse: string) => void;
};

const SickcdContext = createContext<State>({
  sickcd: [],
  getSickCd: () => {
    console.log();
  },
});
export const useSickcd = () => useContext(SickcdContext);

export function SickcdProvider({ children, sickcdService }: sickcdProviderProps) {
  const [sickcd, setSickcd] = useState<Sick[]>([]);

  const getSickCd = async (paramse = '') => {
    console.log(paramse);
    const data = await sickcdService.getSickcd(paramse);
    setSickcd(data);
  };

  useEffect(() => {
    getSickCd();
  }, []);

  const value = useMemo(() => ({ sickcd, getSickCd }), [sickcd]);

  return <SickcdContext.Provider value={value}>{children}</SickcdContext.Provider>;
}
