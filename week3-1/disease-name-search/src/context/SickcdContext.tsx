import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import sickcdDataService from '../service/sickcdService';
import { Sick } from '../types';

type sickcdProviderProps = {
  children: React.ReactNode;
  sickcdService: sickcdDataService;
};

type State = {
  sick: Sick[];
  focusTxt: string;
  valueTxt: boolean;
  focusValueTxt: (boValue: boolean) => void;
  focusGetText: (GetText: string) => void;
  getSick: (paramse: string) => void;
};

const SickcdContext = createContext<State>({
  sick: [],
  focusTxt: '',
  valueTxt: true,
  focusValueTxt: () => null,
  focusGetText: () => null,
  getSick: () => null,
});
export const useSickcd = () => useContext(SickcdContext);

export function SickcdProvider({ children, sickcdService }: sickcdProviderProps) {
  const [sick, setSickcd] = useState<Sick[]>([]);
  const [valueTxt, setValueTxt] = useState(true);
  const [focusTxt, setFocusTxt] = useState('');

  const focusValueTxt = (boValue: boolean) => {
    setValueTxt(boValue);
  };

  const focusGetText = (GetText: string) => {
    setFocusTxt(GetText);
  };

  const getSick = async (paramse = '') => {
    if (paramse === '') return false;
    const data = await sickcdService.getSick(paramse);
    setSickcd(data);
  };

  useEffect(() => {
    getSick();
  }, []);

  const value = useMemo(() => ({ sick, getSick, focusTxt, focusGetText, valueTxt, focusValueTxt }), [sick, focusTxt]);

  return <SickcdContext.Provider value={value}>{children}</SickcdContext.Provider>;
}
