import { useState, useCallback } from 'react';

type initalValue = {
  [key: string]: string;
};

function useInputs(initalValue: initalValue) {
  const [value, setValue] = useState(initalValue);

  const onChange = useCallback((name: string, value: string): void => {
    setValue((preVlaue) => ({
      ...preVlaue,
      [name]: value,
    }));
  }, []);

  const reset = useCallback(() => setValue(initalValue), [initalValue]);
  return { value, onChange, reset };
}

export default useInputs;
